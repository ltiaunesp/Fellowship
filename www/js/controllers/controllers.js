angular.module('fellowship.controllers', ['fellowship.modules'])
  .controller('AppController', function($scope, $location, UserService) {

    $scope.redirectIfNotLoggedIn = function(){
      UserService.verifyLogin()
        .then( (result) => {
          // Redirect to our home.html
          if(!result)
            window.location.href = 'login.html';
        }, (data, status) => {
          console.log('Please log in.');
          window.location.href = 'login.html';
        });
    }

    $scope.redirectIfLoggedIn = function(){
      UserService.verifyLogin()
        .then( (result) => {
          // Redirect to our home.html
          if(!!result)
            window.location.href = 'home.html';
        }, (data, status) => {
        });
    }
});
