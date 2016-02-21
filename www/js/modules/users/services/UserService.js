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
        .then((id) => {
          console.log('Success Authentication');
          console.log(id);
          window.sessionStorage.userLogged = id;
          deferred.resolve(id); // return id
        }, (data, status) => {
          console.log('Fail Authentication');
          deferred.reject('error-do-auth--' + status);
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
        .then((data) => {
          $q.resolve(data.result);
        },(data, status) => {
          $q.reject('error-do-reg--' + status);
        });
      return deferred.promise;
    }

    service.logout = function(){
      window.sessionStorage.clear();
    }

    return service;
  });
