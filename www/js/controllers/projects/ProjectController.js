angular.module('fellowship.controllers')
  .controller('ProjectController', function ($scope, ProjectService, SlotService) {

    var projectId = getqueries("projectId") || $scope.$parent.projectid || null;
    // if(!projectId)
    //   return (window.location.href = "home.html")

    $scope.project = {
      "id"          : projectId,
      "title"       : "The Return of the King",
      "missions"    : [1,2],
      "slots"       : [1, 2],
      "status"      : "on",
      "start"       : "12/22/1996",
      "due"         : "12/22/2016",
      "description" : "The Lord of the Rings: The Return of the King is a 2003 epic high fantasy film directed by Peter Jackson based on the second and third volumes of J. R. R. Tolkien's The Lord of the Rings.[6][7] It is the third and final instalment in The Lord of the Rings series, following The Fellowship of the Ring (2001) and The Two Towers (2002)."
    }
    // Create
    $scope.load = function() {
      ProjectService.getProject(projectId)
        .then(
          (id) => {
            if(id<0){
              showMessage("Fail to load a  project");
              return;
            }
            window.location.href = "project.html?projectId="+id;
          },
          (data, error) => {
            showMessage("Fail to create a new project");
          }
        );
    }

    // Update
    $scope.update = function() {
      console.log('UPDATE FUNCTION CALLED');
      var project = $scope.project;
      // FUNÇÃO PARA CRIAR UM NOVO PROJETO
      ProjectService.updateProject(projectId, project)
        .then(
          (result) => {
            console.log(result)
          },
          (data, error) => {
            console.log("Can't update the project")
          }
        )
    }

    // Delete
    $scope.delete = function() {
      console.log('DELETE FUNCTION CALLED');
      ProjectService.removeProject(projectId)
        .then(
          (result) => {
            console.log(result);
          },
          () => {
            console.log("Can't remove the project");
          }
        )
    }

    // To get/set (?) the team slots
    $scope.addSlot = function() {
      ProjectService.createSlot(projectId)
        .then(
          (id) => {
            console.log("Slot sucessfully created")
            $scope.project.slots.push(id);
            ProjectService.updateProject($scope.project)
              .then(
                (result) => {
                  if(!result)
                    SlotService.removeSlot(id)
                },
                () => {
                  SlotService.removeSlot(id);
                  console.log("Can't update project");
                  console.log("Can't create slot");
                  window.location.reload();
                }
              )
          },
          () => {
            console.log("Can't create slot");
          }
        )
    }

    // For adding a new mission
    $scope.addMission = function() {
      console.log('ADD MISSION FUNCTION CALLED');
      // ProjectService.
    }

    // For removing a mission
    $scope.removeMission = function() {
      console.log('REMOVE MISSION FUNCTION CALLED');
    }

    // For listing existent missions
    $scope.listMissions = function() {
      console.log('LIST MISSION FUNCTION CALLED');
    }
    console.log($scope);
  });
