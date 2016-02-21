angular.module('fellowship.controllers')
  .controller('UserController', function($scope, UserService) {

    // Get quest information
    $scope.getUserInfo = function() {
      console.log('GETTING USER INFORMATION');
    }

    // Authenticating user
    $scope.authenticate = function() {
      var organizationName = document.querySelector("#org-name").value;
      var username = document.querySelector("#username").value;
      var password = document.querySelector("#password").value;

      UserService.authenticate(username, password, organizationName)
      .success( (result) => {
        console.log('Logged in!');
        // Redirect to our home.html
        window.location.href = "home.html";
      })
      .error( (data, status) => {
        console.log('Error: ' + status);
      });
    };

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

      UserService.register(firstName, username, password, 'Member', organizationName)
      .success( (result) => {
        console.log('Account created!');
        // Redirect to our home.html
        window.location.href = "home.html";
      })
      .error( (data, status) => {
        console.log("Error: " + status);
      });
    };

  });
