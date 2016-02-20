angular.module('fellowship.modules.api.services')
  .service('ApiService', function($http, $q){
    var service = {};

    var urlBase = 'http://uvkkc35ecaa7.vinifig.koding.io/js/json'

    var req = {
      method : 'GET',
      url    : ''
    }

    service.performCall = function(module, method, parameters){
      var deferred = $q.defer();
      // req.url = urlBase + '/' + module + '/' + method;
      req.url = urlBase + '/' + module + '/' + method + ".json"; // change on server implementation
      $http(req)
        .sucess(deferred.resolve)
        .error((data,status) => {
          deferred.reject("error-do-api-call-" + status);
        });
      return deferred.promise;
    }

    return service;
  });
