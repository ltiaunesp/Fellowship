var mongo = require('../utils/mongo.js');

var service = function(){
  this.listener = (req, res, next) => {
    console.dir(req)
  };
  this.mongo = mongo;
  this.restMethods = {
    index: function index(collection, req, res, next) {
      collection.find(function (err, entity) {
          res.writeHead(200, {
              'Content-Type': 'application/json; charset=utf-8'
          });
          res.end(JSON.stringify(entity));
      });
      return next();
    },
    getById: function getById(collection, req, res, next) {
      console.dir(req.params)
        collection.findOne({
            _id: req.params._id
        }, function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'application/json; charset=utf-8'
            });
            res.end(JSON.stringify(data));
        });
        return next();
    },
    create: function create(collection, req, res, next) {
        var skill = req.params;
        console.log("Creating entity")
        collection.save(skill,
            function (err, data) {
                res.writeHead(200, {
                    'Content-Type': 'application/json; charset=utf-8'
                });
                res.end(JSON.stringify(data));
                console.dir(skill);
            });
        return next();
    },
    updateById: function updateById(collection, req, res, next) {
        // get the existing skill
        console.log("updateById")
        console.dir(req.params)
        collection.findOne({
            _id: req.params._id
        }, function (err, data) {
            // merge req.params/skill with the server/skill
            if (err){
              console.log("got database error " + err);
            }
            console.log("updating data " + data);

            var updProd = {}; // updated entity
            // logic similar to jQuery.extend(); to merge 2 objects.
            for (var n in data) {
                updProd[n] = data[n];
            }
            for (var n in req.params) {
                updProd[n] = req.params[n];
            }
            collection.update({
                _id: req.params._id
            }, updProd, {
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
    },
    deleteById: function deleteById(collection, req, res, next) {
        collection.remove({
            _id: req.params._id
        }, function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'application/json; charset=utf-8'
            });
            res.end(JSON.stringify(true));
        });
        return next();
    }
  }
}

module.exports = service;
