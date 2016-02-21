var Services = require('./services.js');

var service  = new Services();


var methods  = {};

methods.authenticate = function(req, res){
  res.end(JSON.stringify({
    result : "Hello, World from authenticate method"
  }));
}

methods.register = function(req, res){
  res.end(JSON.stringify({
    result : "Hello, World from register method"
  }));
}

service.listener = (req, res) => {
  if( ("path" in req.params) )
    if( (req.params.path in methods ) )
      methods[req.params.path](req, res)
  res.end(JSON.stringify(service.response));
}

module.exports = service;
