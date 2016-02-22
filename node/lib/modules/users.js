var Services = require('./services.js');
var Mongo = require('../utils/mongo.js');

var service  = new Services();

var usersCollection = Mongo.collection('users');
console.log("UserResource initiated")

var methods  = {};

/**
var parameters = {
      'username'     : username,
      'password'     : password,
      'organization' : organization
    }
*/
methods.authenticate = function(req, res, next){
  console.dir(req.params)
  usersCollection.findOne({
      username: req.params.username,
      password: req.params.password,
      organization: req.params.organization
  }, function (err, data) {
    if (err || !data) {
      res.writeHead(403, {});
      res.end();
    } else {
      var newData = {
        id: data._id,
        username: data.username,
        organization: data.organization
      }
      res.writeHead(200, {
          'Content-Type': 'application/json; charset=utf-8'
      });
      res.end(JSON.stringify(newData));
    }
  });
  return next();
}

methods.register = function(req, res, next){
  return service.restMethods.create(usersCollection, req, res, next);
}

service.listener = (req, res, next) => {
  if( ("path" in req.params) && (req.params.path in methods ) ){
    var path = req.params.path;
    delete req.params.path;
    methods[path](req, res, next);
  }
  return next();
}

module.exports = service;
