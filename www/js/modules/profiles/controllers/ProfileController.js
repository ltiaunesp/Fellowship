angular.module('fellowship.modules.profiles.controllers')
  .controller('ProfileController', function ($scope) {
    
    // List users
    $scope.listUsers = function() {
      console.log('LISTING USERS');
    }

    // Get user profile
    $scope.getProfile = function(id) {
      console.log('GETTING USER ID = ' + id);
    }

    // Set user profile
    $scope.setProfile = function() {
      console.log('sETTING USER ID = ' + id);
    }

  })
