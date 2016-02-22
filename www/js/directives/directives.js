angular.module('fellowship.directives', [])
  .directive("fellow-project", function(){
    return {
      restrict    : 'E',
      templateUrl : '/views/projectBlock.html'
    }
  })  //
