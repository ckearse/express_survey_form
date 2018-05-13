const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  const data = {
    locations: [
      {name: 'Mountain_View'},
      {name: 'Burbank'},
      {name: 'San_Jose'},
      {name: 'Seattle'},
      {name: 'DC'}
    ],
    
    languages: [
      {name: 'Javascript'},
      {name: 'C#'},
      {name: 'Java'},
      {name: 'Ruby'},
      {name: 'Python'}
    ]
  }

  res.render('index', {'data': data});
});

app.get('/reset', function(req, res){
  res.redirect('/');
});

app.post('/result', function(req, res){
  const result = {
    name: req.body.name,
    location: req.body.location,
    language: req.body.language,
    comment: req.body.comment
  }
  console.log(req.body);  
  res.render('result', {'result': result});
});

app.listen(7777, function(){
  console.log('Express app listening on port 7777');
});
