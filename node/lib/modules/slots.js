var Services = require('./services.js');
var Mongo = require('../utils/mongo.js');

var service  = new Services();

var slotsCollection = Mongo.collection('slots');
console.log("SlotsResource initiated")

var methods  = {};

methods.list = function(req, res, next){
  return service.restMethods.index(slotsCollection, req, res, next);
}
methods.get = function(req, res, next){
  return service.restMethods.getById(slotsCollection, req, res, next);
}
methods.setskills = function(req, res, next){
  return service.restMethods.updateById(slotsCollection, req, res, next);
}
methods.apply = function(req, res, next){
  slotsCollection.findOne({
      _id: req.params._id
  }, function (err, data) {
      // merge req.params/skill with the server/skill
      if (err){
        console.log("got database error " + err);
      }
      console.log("updating data " + data);

      data.appliers.push(req.params.user);
      slotsCollection.update({
          _id: req.params._id
      }, data, {
          multi: false
      }, function (err, data) {
          res.writeHead(200, {
              'Content-Type': 'application/json; charset=utf-8'
          });
          res.end(JSON.stringify(data));
          console.log("Resource Updated");
          console.dir(req.params);
      });
  });
  return next();
}
methods.allocate = function(req, res, next){
  req.params.owner = req.params.userId
  delete req.params.userId;
  delete req.params.performerId;
  return service.restMethods.updateById(slotsCollection, req, res, next);
}

service.listener = (req, res, next) => {
  if( ("path" in req.params) && (req.params.path in methods ) ){
    var path = req.params.path;
    delete req.params.path;
    return methods[path](req, res, next);
  } else {
    res.writeHead(404, {});
  }
  return next();
}
module.exports = service;
