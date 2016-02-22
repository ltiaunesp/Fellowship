angular.module('fellowship.controllers')
  .controller('MemberController', function ($scope, ProfileService) {
    $scope.member = {
      id         : 1,
      name       : "Samwise Gamgee",
      occupation : "Chief Officer",
      skills      : [{
          "name"  : "run",
          "value" : "+9000"
        },
        {
          "name"  : "track",
          "value" : "42" // It's all 42 ;)
        }
      ]

    }
  })
