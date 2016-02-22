angular.module('fellowship.modules.api.services')
  .service('ApiService', function($http, $q){
    var service = {};

    var urlBase = 'http://uvkkc35ecaa7.vinifig.koding.io:8080/api'

    var isMaster        = [];
    var isProjectMaster = [];
    var isProjectLeader = [];
    var isProjectMember = [];

    var verifyMaster = function(parameters){
      for(i in parameters){

      }
    }

    var validation = function(method, parameters){
      if(method in isMaster)
        return verifyMaster(parameters);
      if(method in isProjectMaster)
        return verifyIsProjectMaster(parameters);
      if(method in isProjectLeader)
        return verifyIsProjectLeader(parameters);
      if(method in isProjectMember)
        return verifyIsProjectMember(parameters);
      return true;
    }

    var req = {
      method : 'POST',
      url    : '',
      data   : {}
    }

    service.performCall = function(module, method, parameters){ //MODULE - MODULE METHOD - METHOD PARAMETERS
      var deferred = $q.defer();
      // req.url = urlBase + '/' + module + '/' + method;
      if(validation(method,parameters)){
        deferred.reject("error-permission")
        return deferred.promise;
      }

      req.url = urlBase + '/' + module + '/' + method; // change on server implementation
      req.data = parameters;
      $http(req)
        .success( (data) => {
          deferred.resolve(data.result);
        })
        .error((data, status) => {
          deferred.reject("error-do-api-call--" + status);
        });
      return deferred.promise;
    }

    return service;
  });
