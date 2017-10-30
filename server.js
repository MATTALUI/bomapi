const express = require('express');
const app = express();

app.use('/', function(req,res,next){
  res.sendStatus(200);
});

app.listen(8000,()=>{
  console.log('listening on :8000');
});
