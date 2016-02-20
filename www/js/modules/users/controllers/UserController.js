angular.module('fellowship.modules.users.controllers')
  .controller('UserController', function($scope) {

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
      // Taking the account information
      var firstName = document.querySelector("#first-name").value;
      var lastName = document.querySelector("#last-name").value;
      var username = document.querySelector("#username").value;
      var organizationName = document.querySelector("#org-name").value;
      var password = document.querySelector("#password").value;
      var confirmPassword = document.querySelector("#conf-password").value;

      if (password !== confirmPassword) {
        console.log('Password dont match!');
        return;
      }

      console.log('Account created!')
    }

  });
