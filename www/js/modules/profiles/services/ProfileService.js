angular.module('fellowship.modules.profiles.services')
  .service("ProfileService", function(ApiService, UserService, $q){
    var service = {};

    service.getProfile = function(id){
      var deferred = $q.defer();
      var parameters = {
        'id'         : id
      }
      ApiService.performCall('profiles', 'get', parameters)
        .success((data) => {
          deferred.resolve(data.result);
        })
        .error((status) => {
          deferred.reject('error-do-req-profile-' + status);
        });
      return deferred.promise;
    }

    service.getCurrentProfile = function(){
      var deferred = $q.defer();

      UserService.verifyLogin()
        .success((id) => {
          if(id)
            service.getProfile(id)
              .success((data) => {
                deferred.resolve(data);
              })
              .error((status) => {
                deferred.reject('error-do-req-current-profile-' + status);
              })
        })

      return deferred.promise;
    }
    return service;
  });
