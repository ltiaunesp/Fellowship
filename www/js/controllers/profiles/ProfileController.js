angular.module('fellowship.controllers')
  .controller('ProfileController', function ($scope, ProfileService) {

    // List users
    $scope.listUsers = function() {
      console.log('listUsers function');
      ProfileService.getAllProfiles(organizationName)
      .then( (result) => { // Success
        console.log(result);
      }, (data, status) => { // Error
        console.log('fail' + status);
      });
    }

    // Get user profile
    $scope.getProfile = function(id) {
      console.log('getProfile function');
      ProfileService.getProfile(id)
      .then( (result) => { // Success
        console.log(result);
      }, (data, status) => { // Error
        console.log('fail' + status);
      });
    }

    // Set user profile
    $scope.getMyProfile = function() {
      console.log('getMyProfile function');
      ProfileService.getCurrentProfile()
      .then( (result) => { // Success
        console.log(result);
      }, (data, status) => { // Error
        console.log('fail' + status);
      });
    }

  })
