angular.module('fellowship.modules.profiles.services')
  .service('ProfileService', function(ApiService, UserService, $q){
    var service = {};

    service.getProfile = function(id){
      var deferred = $q.defer();
      var parameters = {
        'id' : id
      }
      ApiService.performCall('profiles', 'get', parameters)
        .then((data) => {
          deferred.resolve(data);
        }, (data, status) => {
          deferred.reject('error-do-req-profile--' + status);
        });
      return deferred.promise;
    }

    service.getAllProfiles = function(organization){
      var deferred = $q.defer();
      var parameters = {
        'organization' : organization
      };
      ApiService.performCall('profiles', 'getall', parameters)
        .then((data) => {
          deferred.resolve(data);
        }, (data, status) => {
          deferred.reject('error-fail-to-get-all-members--'+status);
        })
      return deferred.promise;
    }

    service.getCurrentProfile = function(){
      var deferred = $q.defer();

      UserService.verifyLogin()
        .then((id) => {
          if(id)
            service.getProfile(id)
              .then((data) => {
                deferred.resolve(data);
              },(data, status) => {
                deferred.reject('error-do-req-current-profile--' + status);
              })
          else
            deferred.reject('error-user-not-logged')
        }, (data, status) => {
          deferred.reject('error-cant-verify-login');
        });

      return deferred.promise;
    }
    return service;
  });
