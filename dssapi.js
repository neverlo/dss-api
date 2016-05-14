/**
 * Module dependencies.
 */
var path = require('path'),
  express = require('express'),
  util = require('util'),
  utils = require('./lib/utils'),
  config = require('./config'),
  ejs = require('ejs'),
  i18n = require("i18next"),
  favicon = require('serve-favicon'),
  bodyParser = require('body-parser');

process.on('uncaughtException', function(err){
  if(err){
    console.log("Error Occurred: " + util.inspect(err));
  }
});

utils.extendEjs(ejs);

var app = express();

app.engine('.html', ejs.__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

i18n.init();

app.locals.config = require('./config');
app.locals.utils = utils;

app.use(i18n.handle);
app.use(favicon(__dirname + '/public/assets/images/rex.ico'));
app.use(utils.sundry);
app.use(utils.rightsControl);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser());

app.use(config.managerPath, require('./controllers/api'));
app.use(config.managerPath, require('./controllers/simulator'));
app.use(require('./controllers/handler'));

app.listen(config.port, '0.0.0.0', function(){
  console.log('Server started at '+config.port + ' ...');
});
