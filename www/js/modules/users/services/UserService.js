angular.module('fellowship.modules.api.services')
  .service('UserService', function(ApiService, $q){
    var service = {};

    service.verifyLogin = function(){
      var deferred = $q.defer();
      try{
        if(window.sessionStorage.userLogged)
          deferred.resolve(window.sessionStorage.userLogged)
        else
          deferred.resolve(false);
      }catch(e){
        deferred.reject('error-do-user-verify-login');
      }
      return deferred.promise;
    }
    service.authenticate = function(username, password, organization){
      var deferred = $q.defer();
      var parameters = {
        'username'     : username,
        'password'     : password,
        'organization' : organization
      }
      ApiService.performCall('users', 'authenticate', parameters)
        .success((data) => {
          console.log('Success Authentication');
          console.log(data);
          $q.resolve(data);
        })
        .error((data, status) => {
          console.log('Fail Authentication');
          $q.reject('error-do-auth--' + status);
        });
      return deferred.promise;
    }

    service.register = function(name, username, password, job, organization){
      var deferred = $q.defer();
      var parameters = {
        'name'         : name,
        'username'     : username,
        'password'     : password,
        'organization' : organization,
        'job'          : job
      }
      ApiService.performCall('users', 'register', parameters)
        .success((data) => {
          $q.resolve(data.result);
        })
        .error((data, status) => {
          $q.reject('error-do-reg--' + status);
        });
      return deferred.promise;
    }

    return service;
  });
