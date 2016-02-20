angular.module('fellowship.controllers')
  .controller('ProjectController', function ($scope) {

    // Create
    $scope.create = function() {
      console.log('CREATE FUNCTION CALLED');
    }

    // Read
    $scope.read = function() {
      console.log('READ FUNCTION CALLED');
    }

    // Update
    $scope.update = function() {
      console.log('UPDATE FUNCTION CALLED');
    }

    // Delete
    $scope.delete = function() {
      console.log('DELETE FUNCTION CALLED');
    }

    // Index
    $scope.index = function() {
      console.log('INDEX FUNCTION CALLED');
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
