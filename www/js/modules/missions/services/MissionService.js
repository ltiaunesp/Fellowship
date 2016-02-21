angular.module('fellowship.modules.missions.services')
  .service('MissionService', function(ApiService, $q){
    var service = {};

    service.addQuests = function(missionid, title, desc, points, timeToComplete, deadline, owner){
      var deferred = $q.defer();
      var parameters = {
        mission  : missionid,
        title    : title,
        desc     : desc,
        points   : points,
        duration : timeToComplete,
        deadline : deadline,
        owner    : owner
      }
      ApiService.performCall('missions','addquest', parameters)
        .then( (result) => {
          deferred.resolve(result);
        }, (data, status) => {
          deferred.reject('error-do-quest-create--'+status)
        })

      return deferred.promise;
    }

    service.listQuests = function(missionid){
      var deferred = $q.defer();
      var parameters = {
        mission  : missionid
      }
      ApiService.performCall('missions','getquests', parameters)
        .then( (quests) => {
          deferred.resolve(quests);
        }, (data, status) => {
          deferred.reject('error-do-quest-list--'+status)
        })

      return deferred.promise;
    }

    service.removeQuests = function(mission, questid){
      var deferred = $q.defer();
      var parameters = {
        mission : missionid,
        questid : questid
      }
      ApiService.performCall('missions','removequests', parameters)
        .then( (result) => {
          deferred.resolve(result);
        }, (data, status) => {
          deferred.reject('error-do-quest-remove--'+status)
        })

      return deferred.promise;
    }

    service.getMission = function(id){
      var deferred = $q.defer();
      var parameters = {
        mission  : id
      }
      ApiService.performCall('missions','getmission', parameters)
        .then( (mission) => {
          deferred.resolve(mission);
        }, (data, status) => {
          deferred.reject('error-do-get-mission--'+status)
        })

      return deferred.promise;
    }

    service.getMission = function(id){
      var deferred = $q.defer();
      var parameters = {
        mission  : id
      }
      ApiService.performCall('missions','getmission', parameters)
        .then( (mission) => {
          deferred.resolve(mission);
        }, (data, status) => {
          deferred.reject('error-do-get-mission--'+status)
        })

      return deferred.promise;
    }

    service.updateMission = function(id, mission){
      var deferred = $q.defer();
      var parameters = {
        missionid  : id,
        newmission : mission
      }
      ApiService.performCall('missions','updatemission', parameters)
        .then( (mission) => {
          deferred.resolve(mission);
        }, (data, status) => {
          deferred.reject('error-do-get-mission--'+status)
        })

      return deferred.promise;
    }

    return service;
  });
