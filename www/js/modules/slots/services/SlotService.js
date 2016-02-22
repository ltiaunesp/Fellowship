angular.module('fellowship.modules.slots.services')
  .service("SlotService", function(ApiService, UserService, ProfileService, $q){
    var service = {}


    service.getSlot = function(id){
      var deferred = $q.defer();
      var parameters = {
        'id'         : id
      }
      ApiService.performCall('slots', 'get', parameters)
        .then((data) => {
          deferred.resolve(data.result);
        },(data,status) => {
          deferred.reject('error-do-req-slot-' + status);
        });
      return deferred.promise;
    }

    service.removeSlot = function(id){
      var deferred = $q.defer();
      UserService.verifyLogin()
        .then((uid) => { // The back-end system will verify if that user have permission to allocate members.
          if(uid){
            var parameters = {
              'id'   : id,
              'performerId' : uid
            }
            Api.performCall('slots','removeslot', parameters)
              .then((data) => {
                deferred.resolve(data);
              }, (data,status) => {
                deferred.reject('error-do-remove-slot-' + status);
              })
            }
          }else
            deferred.reject("error-user-not-logged")
        }, (data, status) => {
          deferred.reject('error-cant-verify-login');
        });
      return deferred.promise;

    }

    service.getSlotRecomendations = function(id){
      var deferred = $q.defer();
      service.getSlot(id)
        .then((slot) => {
          var members = new Set();
          var appliers = slot.appliers;
          ProfileService.getAllProfiles()
            .then( (profiles) => {
              profiles.forEach((profile,index) => {
                slot.skills.forEach( (skill,index) => {
                  if(profile.skills[skill.name] >= skill.value || appliers.indexOf(profile.id) !=1)
                    members.add(profile);
                });
              });
              deferred.resolve(Array.from(members));
            }, (data,status) => {
              deferred.reject('error-cant-get-profiles-'+status)
            })
        },(data,status) => {
          deferred.reject('error-cant-get-slot-'+status)

        })
      return deferred.promise;
    }

    service.setSkills = function(id, skills){
      var deferred = $q.defer();
      UserService.verifyLogin()
        .then((uid) => { // The back-end system will verify if that user have permission to allocate members.
          if(uid){
            var parameters = {
              'id'   : id,
              'userId' : userid,
              'performerId' : uid,
              'skills' : skills
            }
            Api.performCall('slots','setskills', parameters)
              .then((data) => {
                deferred.resolve(data);
              }, (data,status) => {
                deferred.reject('error-do-set-skills-' + status);
              })
            }
          }else
            deferred.reject("error-user-not-logged")
        }, (data, status) => {
          deferred.reject('error-cant-verify-login');
        });
      return deferred.promise;



    service.applySlot = function(id){
      var deferred = $q.defer();
      UserService.verifyLogin()
        .then((uid) => { // userID
          if(uid){
            var parameters = {
              'id'   : id,
              'user' : uid
            }
            ApiService.performCall('slots','apply', parameters)
              .then((result) => {
                deferred.resolve(result);
              }, (data, status) => {
                deferred.reject('error-fail-to-apply-'+status)
              })
          }else
            deferred.reject("error-user-not-logged")
        }, (data, status) => {
          deferred.reject('error-cant-verify-login');
        });
      return deferred.promise;
    }

    service.allocMember = function(id, userid){
      var deferred = $q.defer();
      UserService.verifyLogin()
        .then((uid) => { // The back-end system will verify if that user have permission to allocate members.
          if(uid){
            var parameters = {
              'id'   : id,
              'userId' : userid,
              'performerId' : uid
            }
            ApiService.performCall('slots','allocate', parameters)
              .then((result) => {
                deferred.resolve(result);
              }, ( data, status) => {
                deferred.reject('error-fail-to-allocate-member-'+status)
              })
          }else
            deferred.reject("error-user-not-logged")
        }, (data, status) => {
          deferred.reject('error-cant-verify-login');
        });
      return deferred.promise;
    }

    service.acceptApply = function(idSlot, idMember){
      var deferred = $q.defer();
      service.getSlot(idSlot)
        .then((result) => {
          if(result.user == false)
            service.allocMember(idSlot, idMember)
              .then((result) => {
                deferred.resolve(result);
              }, (data, status) => {
                deferred.reject("error-cant-alocate-member-" + status);
              })
        }, (data,status) => {
          deferred.reject("error-cant-get-slot-"+status);
        });
      return deferred.promise;
    }

    return service;
  });
