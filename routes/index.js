var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bollymoods', function(err) {
  if(err) console.log('Error connecting to database:', err);
  else console.log('MongoDb Connection: ok');
});

var tagSchema = mongoose.Schema({'type': String},{collection: 'tags'});

var tagModel  = mongoose.model('tag', tagSchema);

var articleSchema = mongoose.Schema({
  'title':    String,
  'src':      String,
  'tags':     Array,
  'comments': Array},
  {collection: 'articles'});

var articleModel = mongoose.model('article', articleSchema);


module.exports.index = function(req, res) {
  var data = tagModel.find(function(err, tags) {
    if(err) return console.log('Error-tags:', err);
    else {
      console.log(tags);
      articleModel.find(function(err, articles) {
        if(err) return console.log('Error-articles:', err);
        else {
          console.log(articles);
          res.render('index', {tags: tags, articles: articles});    
        }
      });
    }
  });
}
