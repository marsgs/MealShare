var express = require('express')
var app = express()
//var path = require('path');
var path = __dirname + '/views/';
//const path = require('path');
app.set ('view engine','ejs');
var mongoose = require('mongoose');
var itemDB = require('./utility/itemDB.js');
var session = require('express-session');
app.use(session({secret: "nbad session secret"}));
const bodyParser = require('body-parser');
//app.use('/views',express.static('views'))
//app.use('/ressources',express.static('ressources'))
//app.use('/assets', express.static(__dirname +'/../resources'));

//app.get('/', (req, res) => res.render('store'));

app.use(express.static(__dirname + '/ressources'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function(req, res){
  console.log(req.url)
res.render('index');
});

app.get('/Involved', function(req, res){
  console.log(req.url)
res.render('involved');
});

app.get('/Newsletter', function(req, res){
  console.log(req.url)
res.render('newsletter');
});

app.get('/Registration', function(req, res){
  console.log(req.url)
res.render('registrationPage');
});

app.get('/Signin*', function(req, res){

  console.log(req.url)

  res.render("signin");

});

app.post('/signInfo*', function(req, res){

  console.log(req.url)
  var data = itemDB.getItems(0);
  var data1 = data[0].userName;
  console.log(data[0]);
  console.log(req.body);
  if(req.body.username == data[0].userName && req.body.password == data[0].password){

    res.render("profileIndex", {data: data});
  }else {
    res.render("signin");
  }

});

app.get('/Store', function(req, res){
  console.log(req.url)
res.render('store');
});

app.get('/InvolvedAsDonor*', function(req, res){
  console.log(req.url)
res.render('involvedAsDonor');
});

app.post('/donInfo*', function(req, res){
  console.log(req.url);
  var data = itemDB.getItems(0);
  res.render('registerThank', {data: data});
});

app.get('/InvolvedAsVolunteer', function(req, res){
  console.log(req.url)
res.render('involvedAsVolunteer');
});

app.post('/volInfo*', function(req, res){
  console.log(req.url)
var data = itemDB.getItems(0);
res.render('registerThank', {data: data});
});

app.get('/userProfile', function(req, res){
  console.log(req.url)
res.render('userProfile');
});

app.get('/scheduleDroppOff*', function(req, res){
  console.log(req.url);
  var data = itemDB.getItems(0);
res.render('scheduleDroppOff', {data: data});
});

app.post('/dropInfo*', function(req, res){
  console.log(req.url);
  var data = itemDB.getItems(0);
  res.render('dropthank', {data: data});
});

app.get('/account', function(req, res){
  console.log(req.url);
  var data = itemDB.getItems(0);
res.render('account',{data: data});
});

app.get('/donationRecord', function(req,res){
  console.log(req);
  var data = itemDB.getItems(0);
    res.render('donationRecord',{data: data})
})

app.get('/impactOfDonations', function(req,res){
  console.log(req);
  var data = itemDB.getItems(0);
    res.render('impactOfDonations', {data: data})
})

app.get('/profileIndex', function(req,res){
  console.log(req)
  var data = itemDB.getItems(0);
  console.log('my'+data);
    res.render('profileIndex', {data: data})
})





app.listen(3000, () => console.log(`Meal Share app listening on port 3000!`));
