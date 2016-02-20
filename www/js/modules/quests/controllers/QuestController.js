angular.module('fellowship.modules.quests.controllers')
  .controller('QuestController', [function ($scope) {

    // Get quest information
    $scope.get = function() {
      console.log('GET QUEST FUNCTION CALLED');
    }

    // Delete quest
    $scope.deleteQuest = function() {
      console.log('DELETE QUEST FUNCTION CALLED');
    }

  }]);
