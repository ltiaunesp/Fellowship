var Services = require('./services.js');
var Mongo = require('../utils/mongo.js');

var service  = new Services();

var usersCollection = Mongo.collection('projects');
console.log("UserResource initiated")

var methods  = {};

methods.list = function(req, res, next){
  return service.restMethods.index(usersCollection, req, res, next);
}

methods.authenticate = function(req, res){
  res.end(JSON.stringify({
    result : "Hello, World from authenticate method"
  }));
}

methods.register = function(req, res){
  console.log("got the request")
  usersCollection.find(function (err, data) {
      console.log("got the data")
      console.dir(data)
      res.writeHead(200, {
          'Content-Type': 'application/json; charset=utf-8'
      });
      console.log("got the data")
      res.end(JSON.stringify(data));
  });
  console.log("end request")
}

service.listener = (req, res, next) => {
  if( ("path" in req.params) && (req.params.path in methods ) ){
    methods[req.params.path](req, res, next)
  } else {
    res.end(JSON.stringify(service.response));
  }
  return next();
}

module.exports = service;
