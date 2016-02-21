angular.module('fellowship.modules.quests.services')
  .service("QuestService", function(ApiService, UserService, $q){
    var service = {};

    service.getQuest = function(id){
      var deferred = $q.defer();
      var parameters = {
        'id' : id
      }
      ApiService.performCall('quests', 'get', parameters)
        .success( (quest) => {
          deferred.resolve(quest);
        })
        .error( (data, status) => {
          deferred.reject("error-do-quest-req--"+status);
        });
      return deferred.promise;
    }

    service.updateQuest = function(id, quest){
      var deferred = $q.defer();
      var parameters = {
        'id'   : id,
        'quest': quest
      }
      ApiService.performCall('quests', 'update', parameters)
        .success( (data) => { // probably will return true or false. True for success and False for Fail
          deferred.resolve(data);
        })
        .error( (data, status) => {
          deferred.reject("error-do-quest-update--"+status);
        });
      return deferred.promise;
    }

    service.applyQuest = function(id){
      var deferred = $q.defer();
      service.getQuest(id)
        .success( (quest) => {
          var isAvailable = !quest.owner;
          if(isAvailableApply){
            UserService.verifyLogin()
              .success( (userID) => {
                quest.owner = userID;
                service.updateQuest(id, quest)
                  .success( deferred.resolve )
                  .error( (data,status) => {
                    deferred.reject("error-cant-update-user-data--" + status);
                  })
              })
              .error( (data, status) => {
                deferred.reject("error-cant-get-user-id--" + status)
              })
          }

        })
        .error( (data, status) => {
          deferer.reject("error-cant-get-quest--"+status)
        })
    }

    return service;
  });
