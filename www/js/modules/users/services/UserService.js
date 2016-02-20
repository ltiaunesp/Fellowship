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
          console.log('Success Authentication');
          console.log(data);
          $q.resolve(data);
        })
        .error((status) => {
          console.log('Fail Authentication');
          $q.reject('error-do-auth-' + status);
        });
      return deferred.promise;
    }

    service.register = function(name, username, password, job = "member", organization = 1){
      var deferred = $q.defer();
      var parameters = {
        'name'         : name,
        'username'     : username,
        'password'     : password,
        'organization' : organization,
        'job'          : job
      }
      ApiService.performCall('users', 'register', parameters)
        .sucess((data) => {
          $q.resolve(data.result);
        })
        .error((status) => {
          $q.reject('error-do-reg-' + status);
        });
      return deferred.promise;
    }

    return service;
  });
