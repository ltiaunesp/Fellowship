angular.module('fellowship.modules.api.services')
  .service('UserService', function(ApiService, $q){
    var service = {};

    service.verifyLogin = function(){
      var deferred = $q.defer();
      try{
        if(window.sessionStorage.userLogged)
          deferred.resolve(window.sessionStorage.userLogged)
        else
          deffered.resolve(false);
      catch(e){
        deferred.reject('error-do-user-verify-login');
      }
      return deffered.promise;
    }
    service.authenticate = function(username, password, organization){
      var deferred = $q.defer();
      var parameters = {
        'username'     : username,
        'password'     : password,
        'organization' : organization
      }
      ApiService.performCall('users', 'authenticate', parameters)
        .sucess((data) => {
          console.log('Sucess Authentication');
          console.log(data);
          $q.resolve(data);
        })
        .error((status) => {
          console.log('Fail Authentication');
          $q.reject('error-do-auth-' + status);
        });
      return deferred.promise;
    }

    service.register = function(name, username, password, organization){
      
    }

    return service;
  });
