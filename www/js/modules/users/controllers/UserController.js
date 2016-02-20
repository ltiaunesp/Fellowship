angular.module('fellowship.modules.users.controllers')
  .controller('UserController', [function($scope) {

    // Get quest information
    $scope.getUserInfo = function() {
      console.log('GETTING USER INFORMATION');
    }

    // Authenticating user
    $scope.authenticate = function() {
      console.log('AUTHENTICATING USER');
    }

    // Logging out the user
    $scope.logout = function() {
      console.log('LOGGING OUT');
    }

    // User registration
    $scope.register = function() {
      console.log('REGISTER USER');
    }

  }]);
