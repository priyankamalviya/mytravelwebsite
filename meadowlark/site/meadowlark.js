var express = require('express');

var app = express();

//set up handlebars view engine
var handlebars = require('express-handlebars')
  .create({defaultLayout: 'main'});

  app.engine('handlebars', handlebars.engine);
  app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);


app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
  //res.type('text/plain');
  //res.send('Meadowlark Travel');
  res.render('home');
});

// random fortunes for about page
var fortunes = [
  "Conquer your fears or they will conquer you",
  "Rivers need springs",
  "If you are beat up, dont GIVE UP, rest up and then GET UP",
  "Do not fear what you don't know",
  "Whenever possible, keep it simple"
];
app.get('/about', function(req, res){
  //res.type('text/plain');
  //res.send('About Meadowlark Travel');

  var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

  res.render('about', {fortune: randomFortune});
});


//custom 404 page catch-all handler middleware
app.use(function(req,res, next){
  //res.type('text/plain');
  res.status(404);
  //res.send('404 - Not Found');
  res.render('404');
});


// 500 page handler middleware
app.use(function(err, req, res, next){
  console.error(err.stack);
  //res.type('text/plain');
  res.status(500);
  //res.send('500-Internal Server Error');
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:'+
    app.get('port') + '; Press Ctrl+C to terminate.');
});
