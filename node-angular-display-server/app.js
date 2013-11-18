//require('strong-agent').profile();

/**
 * If configured as a cluster master, just start controller.
 */

var control = require('strong-cluster-control');
var options = control.loadOptions();

if(options.clustered && options.isMaster) {
  return control.start(options);
}

/**
 * Main application
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

var options = {};

routes(app, options);

http.createServer(app).listen(app.get('port'), function(){
  console.log('node-server listening on port ' + app.get('port'));
});

