var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  ejs = require('ejs'),
  bodyParser = require('body-parser'),
  sassMiddleware = require('node-sass-middleware');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use('/styles', sassMiddleware({
  src: __dirname + '/sass',
  dest: __dirname + '/public/styles',
  debug: true,
  outputStyle: 'expanded'
}));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('site/index');
});

server.listen(process.env.PORT || 3000, function() {
  console.log('server started');
});