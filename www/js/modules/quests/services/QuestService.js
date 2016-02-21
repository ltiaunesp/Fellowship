angular.module('fellowship.modules.quests.services')
  .service("QuestService", function(ApiService, UserService, $q){
    var service = {};

    service.getQuest = function(id){
      var deferred = $q.defer();
      var parameters = {
        'id' : id
      }
      ApiService.performCall('quests', 'get', parameters)
        .then( (quest) => {
          deferred.resolve(quest);
        },(data, status) => {
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
        .then( (data) => { // probably will return true or false. True for success and False for Fail
          deferred.resolve(data);
        }, (data, status) => {
          deferred.reject("error-do-quest-update--"+status);
        });
      return deferred.promise;
    }

    service.applyQuest = function(id){
      var deferred = $q.defer();
      service.getQuest(id)
        .then( (quest) => {
          var isAvailable = !quest.owner;
          if(isAvailableApply){
            UserService.verifyLogin()
              .then( (userID) => {
                quest.owner = userID;
                service.updateQuest(id, quest)
                  .then( (result) => {
                    deferred.resolve
                  }, (data,status) => {
                    deferred.reject("error-cant-update-user-data--" + status);
                  })
              }, (data, status) => {
                deferred.reject("error-cant-get-user-id--" + status)
              })
          }

        }, (data, status) => {
          deferer.reject("error-cant-get-quest--"+status)
        })
    }

    return service;
  });
