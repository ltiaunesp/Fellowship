angular.module('myApp.controllers')
  .controller("MissionController", ["$scope", function ($scope) {

    // Create a new quest
    $scope.createQuest = function() {
      console.log("CREATE QUEST FUNCTION CALLED");
    }

    // Delete a quest
    $scope.deleteQuest = function() {
      console.log("DELETE QUEST FUNCTION CALLED");
    }

    // For listing existent quests
    $scope.listQuests = function() {
      console.log("LIST QUEST FUNCTION CALLED");
    }

    // Update the mission
    $scope.update = function() {
      console.log("UPDATE MISSION FUNCTION CALLED");
    }

    // Get the mission information
    $scope.get = function() {
      console.log("GET MISSION FUNCTION CALLED");
    }

  }]);
