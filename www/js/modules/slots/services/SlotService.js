angular.module('fellowship.modules.slots.services')
  .service("SlotService", function(ApiService, UserService, ProfileService, $q){
    var service = {}


    service.getSlot = function(id){
      var deferred = $q.defer();
      var parameters = {
        'id'         : id
      }
      ApiService.performCall('slots', 'get', parameters)
        .success((data) => {
          deferred.resolve(data.result);
        })
        .error((status) => {
          deferred.reject('error-do-req-slot-' + status);
        });
      return deferred.promise;
    }

    service.getSlotRecomendations = function(id){
      var deferred = $q.defer();
      service.getSlot(id)
        .success((slot) => {
          var members = new Set();
          var appliers = slot.appliers;
          ProfileService.getAllProfiles()
            .success( (profiles) => {
              profiles.forEach((profile,index) => {
                slot.skills.forEach( (skill,index) => {
                  if(profile.skills[skill.name] >= skill.value || appliers.indexOf(profile.id) != -1)
                    members.add(profile);
                });
              });
              deferred.resolve(Array.from(members));
            })
            .error((status) => {
              deferred.reject('error-cant-get-profiles-'+status)
            })
        })
        .error((status) => {
          deferred.reject('error-cant-get-slot-'+status)

        })
      return deffered.promise;
    }

    service.setSkills = function(id, skills){
      var deferred = $q.defer();
      var parameters = {
        id : id,
        skills : skills
      }
      Api.performCall('slots','setskills', parameters)
        .success((data) => {
          deferred.resolve(data);
        })
        .error((status) => {
          deferred.reject('error-do-set-skills-' + status);
        })
    }

    service.applySlot = function(id){
      var deferred = $q.defer();
      UserService.verifyLogin()
        .success((uid) => { // userID
          if(uid){
            var parameters = {
              'id'   : id,
              'user' : uid
            }
            ApiService.performCall('slots','apply', parameters)
              .success((result) => {
                deferred.resolve(result);
              })
              .error((status) => {
                deferred.reject('error-fail-to-apply-'+status)
              })
          }else
            deferred.reject("error-user-not-logged")
        })
        .error((status) => {
          deferred.reject('error-cant-verify-login');
        });
      return deferred.promise;
    }

    service.allocMember = function(id, userid){
      var deferred = $q.defer();
      UserService.verifyLogin()
        .success((uid) => { // The back-end system will verify if that user have permission to allocate members.
          if(uid){
            var parameters = {
              'id'   : id,
              'userId' : userid,
              'performerId' : uid
            }
            ApiService.performCall('slots','allocate', parameters)
              .success((result) => {
                deferred.resolve(result);
              })
              .error((status) => {
                deferred.reject('error-fail-to-allocate-member-'+status)
              })
          }else
            deferred.reject("error-user-not-logged")
        })
        .error((status) => {
          deferred.reject('error-cant-verify-login');
        });
      return deferred.promise;
    }

    service.acceptApply = function(idSlot, idMember){
      var deferred = $q.defer();
      service.getSlot(idSlot)
        .success((result) => {
          if(result.user == false)
            service.allocMember(idSlot, idMember)
              .success((result) => {
                deferred.resolve(result);
              })
              error((status) => {
                deferred.reject("error-cant-alocate-member-" + status);
              })
        })
        .error((status) => {
          deferred.reject("error-cant-get-slot-"+status);
        });
      return deferred.promise;
    }

    return service;
  });
