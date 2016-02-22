angular.module('fellowship.modules.projects.services')
  .service('ProjectService', function(ApiService, UserService, $q){
    var service = {};

    service.getProject = function(id){
      var deferred = $q.defer();
      var parameters = {
        id : id
      };
      UserService.verifyLogin()
        .then(
          (id) => {
            if(!id)
              deferred.reject("error-user-not-logged-in");
            parameters.user = id;
            ApiService.performCall("projects", "get", parameters)
              .then(
                (list) => {
                  deferred.resolve(list);
                },
                (data, status) => {
                  deferred.reject("error-cant-get-projects--"+status)
                }
              );
          },
          (data, status) => {
            deferred.reject("error-cant-verify-if-user-is-logged-in--" + status)
          }
        )
    }

    service.createProject = function(){
      var deferred = $q.defer();
      var parameters = {}
      UserService.verifyLogin()
        .then(
          (id) => {
            if(!id)
              deferred.reject("error-user-not-logged-in");
            parameters.user = id;
            ApiService.performCall("projects", "create", parameters)
              .then( // RETORNA A ID DO NOVO PROJETO ;)
                (result) => {
                  deferred.resolve(result);
                },
                (data, status) => {
                  deferred.reject("error-cant-create-project--"+status)
                }
              );
          },
          (data, status) => {
            deferred.reject("error-cant-verify-if-user-is-logged-in--" + status)
          }
        )
    }

    service.updateProject = function(projectid, project){
      var deferred = $q.defer();
      var parameters = {
        id         : projectid,
        newProject : project
      };
      UserService.verifyLogin()
        .then(
          (id) => {
            if(!id)
              deferred.reject("error-user-not-logged-in");
            parameters.user = id;
            ApiService.performCall("projects", "update", parameters)
              .then(
                (result) => {
                  deferred.resolve(result);
                },
                (data, status) => {
                  deferred.reject("error-cant-update-project--"+status)
                }
              );
          },
          (data, status) => {
            deferred.reject("error-cant-verify-if-user-is-logged-in--" + status)
          }
        )
    }

    service.removeProject = function(projectid, project){
      var deferred = $q.defer();
      var parameters = {
        id         : projectid
      };
      UserService.verifyLogin()
        .then(
          (id) => {
            if(!id)
              deferred.reject("error-user-not-logged-in");
            parameters.user = id;
            ApiService.performCall("projects", "delete", parameters)
              .then(
                (result) => {
                  deferred.resolve(result);
                },
                (data, status) => {
                  deferred.reject("error-cant-remove-project--"+status)
                }
              );
          },
          (data, status) => {
            deferred.reject("error-cant-verify-if-user-is-logged-in--" + status)
          }
        )
    }

    service.listProjects = function(){
      var deferred = $q.defer();
      var parameters = {};
      UserService.verifyLogin()
        .then(
          (id) => {
            if(!id)
              deferred.reject("error-user-not-logged-in");
            parameters.user = id;
            ApiService.performCall("projects", "list", parameters)
              .then(
                (list) => {
                  deferred.resolve(list);
                },
                (data, status) => {
                  deferred.reject("error-cant-list-projects--"+status)
                }
              );
          },
          (data, status) => {
            deferred.reject("error-cant-verify-if-user-is-logged-in--" + status)
          }
        )
    }

    service.createSlot = function(projectId){
      var deferred = $q.defer();
      var parameters = {
        projectid = projectId
      };
      UserService.verifyLogin()
        .then(
          (id) => {
            if(!id)
              deferred.reject("error-user-not-logged-in");
            parameters.user = id;
            ApiService.performCall("projects", "newslot", parameters)
              .then(
                (result) => {
                  deferred.resolve(result); // return the slot id
                },
                (data, status) => {
                  deferred.reject("error-cant-add-slot--"+status)
                }
              );
          },
          (data, status) => {
            deferred.reject("error-cant-verify-if-user-is-logged-in--" + status)
          }
        )
    }

    service.addMission = function(projectId){
      var deferred = $q.defer();
      var parameters = {
        projectid = projectId
      };
      UserService.verifyLogin()
        .then(
          (id) => {
            if(!id)
              deferred.reject("error-user-not-logged-in");
            parameters.user = id;
            ApiService.performCall("projects", "newmission", parameters)
              .then(
                (result) => {
                  deferred.resolve(result);
                },
                (data, status) => {
                  deferred.reject("error-cant-add-mission--"+status)
                }
              );
          },
          (data, status) => {
            deferred.reject("error-cant-verify-if-user-is-logged-in--" + status)
          }
        )
    }

    service.removeMission = function(projectId){
      var deferred = $q.defer();
      var parameters = {
        projectid = projectId
      };
      UserService.verifyLogin()
        .then(
          (id) => {
            if(!id)
              deferred.reject("error-user-not-logged-in");
            parameters.user = id;
            ApiService.performCall("projects", "removemission", parameters)
              .then(
                (result) => {
                  deferred.resolve(result);
                },
                (data, status) => {
                  deferred.reject("error-cant-remove-mission--"+status)
                }
              );
          },
          (data, status) => {
            deferred.reject("error-cant-verify-if-user-is-logged-in--" + status)
          }
        )
    }

    service.listMissions = function(projectId){
      var deferred = $q.defer();
      var parameters = {
        projectid = projectId
      };
      ApiService.performCall("projects", "listmission", parameters)
        .then(
          (list) => {
            deferred.resolve(list);
          },
          (data, status) => {
            deferred.reject("error-cant-req-list-missions--"+status)
          }
        );
    }

    return service;
  })
