angular.module('fellowship.controllers')
  .controller('MissionController', function ($scope) {

    $scope.mission = {
      id          : 1,
      title       : "They´re taking the Hobbits to Isengard",
      description : "Bring the boys back home",
      quests      : [1,2,3]
    }

    // Create a new quest
    $scope.createQuest = function() {
      console.log('CREATE QUEST FUNCTION CALLED');
    }

    // Delete a quest
    $scope.deleteQuest = function() {
      console.log('DELETE QUEST FUNCTION CALLED');
    }

    // For listing existent quests
    $scope.listQuests = function() {
      console.log('LIST QUEST FUNCTION CALLED');
    }

    // Update the mission
    $scope.update = function() {
      console.log('UPDATE MISSION FUNCTION CALLED');
    }

    // Get the mission information
    $scope.get = function() {
      console.log('GET MISSION FUNCTION CALLED');
    }

  });
