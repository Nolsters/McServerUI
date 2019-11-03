const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/White-List', function(req, res){
  res.render('White-List')
});

app.get('/Map', function(req, res){
  res.render('Map')
});

app.listen(3000, function(){
  console.log('Server started on port 3000....')
});
