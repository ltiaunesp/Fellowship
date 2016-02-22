angular.module('fellowship.controllers')
  .controller('ProfileController', function ($scope, ProfileService) {

    $scope.user = {
        "firstName"  : "Default",
        "lastName"   : "Name",
        "occupation" : "Programmer",
        "id"         : 1,
        "projectIds"  : [1],
        "skillId"    : [1, 2]
      }

    // $scope.users = [
    //   {
    //     "firstName"  : "Default",
    //     "lastName"   : "Name",
    //     "occupation" : "Programmer",
    //     "id"         : "1"
    //   },
    //   {
    //     "firstName"       : "Default",
    //     "lastName"   : "Name 2",
    //     "occupation" : "Designer",
    //     "id"         : "2"
    //   }
    // ] COLOCAR ISSO E OQ MAIS PRECISAR NO MembersController

    // List users
    $scope.listUsers = function() {
      console.log('listUsers function');
      organizationName = 1; // 1 is default
      ProfileService.getAllProfiles(organizationName)
      .then( (result) => { // Success
        console.log(result);
        $scope.users = result;
      }, (data, status) => { // Error
        console.log('fail: ' + status);
      });
    }
/*
    // Get a profile
    $scope.getProfile = function() {
      console.log('getProfile function');
      id = 3;
      ProfileService.getProfile(id)
      .then( (result) => { // Success
        console.log(result);
      }, (data, status) => { // Error
        console.log('fail' + status);
      });
    }*/

    // Get current user profile
    $scope.getMyProfile = function() {
      console.log('getMyProfile function');
      ProfileService.getCurrentProfile()
      .then( (result) => { // Success
        console.log(result);
        $scope.currentUser = result;
      }, (data, status) => { // Error
        console.log('fail' + status);
      });
    }

  })
