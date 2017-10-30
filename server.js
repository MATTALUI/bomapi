const express = require('express');
const app = express();
const knex = require('./knex.js');

// app.use('/', function(req,res,next){
//   res.sendStatus(200);
// });
app.get('/:book', function(req,res,next){
  console.log(req.params.book);
  // knex('books')
  // .where('id', 1)
  // .returning('*')
  // .first()
  // .then((book)=>{
  //   console.log(book);
  // });

  res.send('meow')
});

app.listen(8000,()=>{
  console.log('listening on :8000');
});
