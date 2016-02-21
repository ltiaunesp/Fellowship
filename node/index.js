var express    = require('express');
var cors       = require('cors');
var bodyParser = require('body-parser')
var fs         = require('fs');
var app = new express();

app.use(cors());
app.use(bodyParser.json());

app.get("/api/:path", function(req,res){
  fs.readFile('./json/' + req.params.path.split("_").join("/") + '.json', function(err, data){
    if(err)
      res.end();
    else
      res.end(data);
  });
})

app.listen(8080);
