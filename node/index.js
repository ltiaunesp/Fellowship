var restify    = require('restify');
var Mongo = require('./lib/utils/mongo.js');

var modules = {};

modules.users    = require('./lib/modules/users.js')
modules.profiles = require('./lib/modules/profiles.js')
modules.projects = require('./lib/modules/projects.js')
modules.quests   = require('./lib/modules/quests.js')
modules.missions = require('./lib/modules/missions.js')
modules.slots    = require('./lib/modules/slots.js')

var server = restify.createServer();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.on('InternalServer', function (req, res, err, cb) {
  console.log('restify error', err);
  err.body = 'something is wrong!';
  return cb();
});

// FilterParams
server.use(function (req, res, next){
  console.log('restify request');
  console.dir(req.params);

  req.params._id = Mongo.ObjectId(req.params.id);

  return next();
});

for(module in modules){
  server.post("/api/"+module+"/:path", modules[module].listener);
}


server.listen(4000);
