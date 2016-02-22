var restify    = require('restify');

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
for(module in modules){
  server.get("/api/"+module+"/:path", modules[module].listener)
}
server.listen(4000);
