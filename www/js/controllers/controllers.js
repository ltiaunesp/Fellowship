angular.module('fellowship.controllers', ['fellowship.modules'])
  .controller('AppController', function($scope, $location, UserService) {

    UserService.verifyLogin()
    .then( (result) => {
      console.log('Logged in!');
      // Redirect to our home.html
      window.location.href="home.html";
    }, (data, status) => {
      console.log('Please log in.');
      window.location.href="login.html";
    });
  });
