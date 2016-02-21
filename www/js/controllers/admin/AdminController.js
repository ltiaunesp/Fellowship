angular.module('fellowship.controllers')
  .controller('AdminController', function($scope, UserService) {
    var verifyLogin = function(){
      UserService.verifyLogin()
      .then( (result) => {
        // Redirect to our home.html
        if(!result)
        window.location.href = 'login.html';
        console.log('Logged in!');
      }, (data, status) => {
        console.log('Please log in.');
        window.location.href = 'login.html';
      });

    }
  });
