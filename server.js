const express = require('express');
const app = express();
const knex = require('./knex.js');

// app.use('/', function(req,res,next){
//   res.sendStatus(200);
// });

app.get('/:bookKey/:chapter/:startVerse/:endVerse',function(req,res,next){
  knex('books')
  .where('key', req.params.bookKey)
  .returning('*')
  .first()
  .then((book)=>{
    knex('verses')
    .where('book_id', book.id)
    .where('chapter',req.params.chapter)
    .returning('*')
    .then((chapter)=>{
      if(chapter.length===0){
        res.sendStatus(404);
        return;
      }
      let relevantVerses = chapter.filter((verse)=>{
        return ((verse.verse>=req.params.startVerse)&&(verse.verse<=req.params.endVerse))
      });
      book.reference = `${book.book} ${req.params.chapter}:${req.params.startVerse}-${req.params.endVerse}`;
      book.verses = relevantVerses;
      res.send(book);
    });
  });

});

app.get('/:bookKey/:chapter/:verse',function(req,res,next){
  knex('books')
  .where('key', req.params.bookKey)
  .returning('*')
  .first()
  .then((book)=>{
    knex('verses')
    .where('book_id', book.id)
    .where('chapter',req.params.chapter)
    .returning('*')
    .then((chapter)=>{
      if(chapter.length===0){
        res.sendStatus(404);
        return;
      }
      let correctVerse = chapter.find((verse)=>{
        return verse.verse === Number(req.params.verse);
       });
       correctVerse.book = book.book;
       correctVerse.reference = `${book.book} ${correctVerse.chapter}:${correctVerse.verse}`
      res.send(correctVerse);
    });
  });
});



app.get('/:bookKey/:chapter',function(req,res,next){
  knex('books')
  .where('key', req.params.bookKey)
  .returning('*')
  .first()
  .then((book)=>{
    knex('verses')
    .where('book_id', book.id)
    .where('chapter',req.params.chapter)
    .returning('*')
    .then((chapter)=>{
      if(chapter.length===0){
        res.sendStatus(404);
        return;
      }
      book.chapter = chapter;
      res.send(book);
    });
  });
});

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
      });

      if(req.query.all === 'true'){
        book.verses = versesObj;
      }else{
        book.verses = versesObj['chapter 1'];
      }
      res.send(book);
    });
  });
});

app.listen(8000,()=>{
  console.log('listening on :8000');
});
