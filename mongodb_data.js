var db = new Mongo().getDB('bollymoods');

db.articles.save({
  title: 'Laapata - Ek Tha Tiger',
  src: 'http://www.youtube-nocookie.com/embed/wZNviBy3lrE?rel=0',
  tags: ['All', 'New', 'Romantic'],
  comments: []
});

db.articles.save({
  title: 'Pee Loon-Ouatim',
  src: 'http://www.youtube-nocookie.com/embed/haHYCEEDto0?rel=0',
  tags: ['All', 'New', 'Romantic'],
  comments: []
});

db.counters.insert({_id: 'typeId', seq: 0});

function getNextSequence(name) {
  var ret = db.counters.findAndModify(
    {
      query: {_id: name},
      update: {$inc: {seq: 1} },
      new: true
    }
  ); 
    
  return ret.seq;
}

db.tags.insert({_id: getNextSequence('typeId'), type: 'New' });
db.tags.insert({_id: getNextSequence('typeId'), type: 'Inspiring'});
db.tags.insert({_id: getNextSequence('typeId'), type: 'Classic'});
db.tags.insert({_id: getNextSequence('typeId'), type: 'Bhangra'});
db.tags.insert({_id: getNextSequence('typeId'), type: 'College'});
db.tags.insert({_id: getNextSequence('typeId'), type: '50s-60s'});
db.tags.insert({_id: getNextSequence('typeId'), type: '70s-80s'});
db.tags.insert({_id: getNextSequence('typeId'), type: '90s'});
db.tags.insert({_id: getNextSequence('typeId'), type: 'Disco'});
db.tags.insert({_id: getNextSequence('typeId'), type: 'Funny'});
db.tags.insert({_id: getNextSequence('typeId'), type: 'Dance'});
