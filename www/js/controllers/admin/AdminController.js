angular.module('fellowship.controllers')
  .controller('AdminController', function($scope, UserService) {

    $scope.menuItems = [
      {
        "name" : "Home",
        "URL"  : "home.html"
      },
      {
        "name" : "Members",
        "URL"  : "members.html"
      },
      {
        "name" : "Profile",
        "URL"  : "profile.html"
      }
    ]

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
