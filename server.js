const express = require('express');
const app = express();
const knex = require('./knex.js');

// app.use('/', function(req,res,next){
//   res.sendStatus(200);
// });
app.get('/:bookKey', function(req,res,next){
  knex('books')
  .where('key', req.params.bookKey)
  .returning('*')
  .first()
  .then((book)=>{
    if (typeof book === 'undefined') {
      res.sendStatus(400);
      return;
    }
    knex('verses')
    .where('book_id',book.id)
    .returning('*')
    .then((verses)=>{
      let versesObj = {};
      verses.forEach((verse) => {
        if(versesObj.hasOwnProperty(`chapter ${verse.chapter}`)){
          versesObj[`chapter ${verse.chapter}`].push(verse);
        }else{
          versesObj[`chapter ${verse.chapter}`] = [verse];
        }
      })


      book.verses = versesObj;
      res.send(book);
    });
  });
});

app.listen(8000,()=>{
  console.log('listening on :8000');
});
