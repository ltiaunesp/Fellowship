angular.module('fellowship.controllers')
  .controller('QuestController', function ($scope, QuestService) {

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
