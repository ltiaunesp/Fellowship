var mongo = require('../utils/mongo.js');

var service = function(){
  this.response = {
    "result" : "404"
  };
  this.listener = (req, res) => {
    res.end(JSON.stringify(this.response));
  };
  this.mongo = mongo;
}

module.exports = service;
