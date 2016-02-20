angular.module('fellowship.modules.projects.controllers')
  .controller('ProjectController', function ($scope) {

    // Create
    // Read
    // Update
    // Delete
    // Index
    $scope.crudi = function() {
      console.log('CRUDI FUNCTION CALLED');
    }

    // To get/set (?) the team slots
    $scope.slots = function() {
      console.log('SLOTS FUNCTION CALLED');
    }

    // For adding a new mission
    $scope.addMission = function() {
      console.log('ADD MISSION FUNCTION CALLED');
    }

    // For removing a mission
    $scope.removeMission = function() {
      console.log('REMOVE MISSION FUNCTION CALLED');
    }

    // For listing existent missions
    $scope.listMissions = function() {
      console.log('LIST MISSION FUNCTION CALLED');
    }

  });
