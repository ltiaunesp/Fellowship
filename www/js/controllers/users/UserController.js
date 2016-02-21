angular.module('fellowship.controllers')
  .controller('UserController', function($scope, ApiService) {

    // Get quest information
    $scope.getUserInfo = function() {
      console.log('GETTING USER INFORMATION');
    }

    // Authenticating user
    $scope.authenticate = function() {
      var organizationName = document.querySelector("#org-name").value;
      var username = document.querySelector("#username").value;
      var password = document.querySelector("#password").value;

      var success = ApiService.authenticate(username, password, organizationName);
      console.log(success);
      if (success) {
        // Redirect to our home.html
        window.location.href = "home.html";
      }
      else {
        console.log('Login failed');
        document.querySelector("#password").value = "";
      }
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

      var success = ApiService.register(firstName, username, password, organizationName);
      console.log('Account created!');
      if (success) {
        // Redirect to our home.html
        window.location.href = "home.html";
      }
      else {
        console.log('Login failed');
        document.querySelector("#password").value = "";
      }
      // Redirect to our home.html
      window.location.href = "home.html";
    }

  });
