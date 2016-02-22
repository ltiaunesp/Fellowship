angular.module('fellowship.controllers')
  .controller('QuestController', function ($scope, QuestService) {

    $scope.quest = {
      id          : 1,
      title       : "Just go",
      description : "There and back again",
      deadline    : "12/34/2013",
      skills      : [{
          "name"  : "run",
          "value" : "+9000"
        },
        {
          "name"  : "track",
          "value" : "42" // It's all 42 ;)
        }
      ],
      person      : "Hobbits"
    }

    // Get quest information
    $scope.getQuest = function() {
      console.log('GET QUEST FUNCTION CALLED');
      QuestService.getQuest(id)
      .then( (result) => { // Success
        console.log(result);
      }, (data, status) => { // Error
        console.log('fail' + status);
      });
    }

    // Update quest
    $scope.updateQuest = function() {
      console.log('UPDATE QUEST FUNCTION CALLED');
      QuestService.updateQuest(id, quest)
      .then( (result) => { // Success
        console.log(result);
      }, (data, status) => { // Error
        console.log('fail' + status);
      });
    }

    // ApplyQuest
    $scope.applyQuest = function() {
      console.log('APPLY QUEST FUNCTION CALLED');
      QuestService.applyQuest(id)
      .then( (result) => { // Success
        console.log(result);
      }, (data, status) => { // Error
        console.log('fail' + status);
      });
    }

  });
