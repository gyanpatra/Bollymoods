var express = require('express')
var app     = express();
var port    = process.env.PORT || 5000;
var methodOverride = require('method-override');

var routes  = require('./routes/index');

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);
                                      
var server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});
