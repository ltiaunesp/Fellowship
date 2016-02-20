angular.module('fellowship.modules.api.services')
  .service('ApiService', function($http, $q){
    var service = {};

    var urlBase = './jsons/'

    var req = {
      method : 'GET',
      url    : ''
    }

    service.performCall = function(module, method, parameters){
      var deferred = $q.defer();
      // req.url = urlBase + '/' + module + '/' + method;
      req.url = urlBase + '/' + module + '/' + method + ".json"; // change on server implementation
      req.url = "http://www.google.com";
      $http(req)
        .sucess(deferred.resolve)
        .error((data,status) => {
          deffered.reject("error-do-api-call-" + status);
        });
      return deferred.promise;
    }

    return service;
  });
