var express = require('express')
var app = express()
//var path = require('path');
var path = __dirname + '/views/';

app.set ('view engine','ejs');
//app.use('/views',express.static('views'))
//app.use('/ressources',express.static('ressources'))
//app.use('/assets', express.static(__dirname +'/../resources'));

//app.get('/', (req, res) => res.render('store'));

app.use(express.static(__dirname + '/ressources'));

app.get('/', function(req, res){
  console.log(req.url)
res.render(path + 'index');
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

app.get('/Signin', function(req, res){
  console.log(req.url)
res.render('signin');
});

app.get('/Store', function(req, res){
  console.log(req.url)
res.render('store');
});

app.get('/InvolvedAsDonor', function(req, res){
  console.log(req.url)
res.render('involvedAsDonor');
});

app.get('/InvolvedAsVolunteer', function(req, res){
  console.log(req.url)
res.render('involvedAsVolunteer');
});

app.get('/userProfile', function(req, res){
  console.log(req.url)
res.render('userProfile');
});

app.get('/scheduleDroppOff', function(req, res){
  console.log(req.url)
res.render('scheduleDroppOff');
});

app.get('/account', function(req, res){
  console.log(req.url)
res.render('account');
});

app.get('/donationRecord', function(req,res){
  console.log(req)
    res.render('donationRecord')
})

app.get('/impactOfDonations', function(req,res){
  console.log(req)
    res.render('impactOfDonations')
})

app.get('/profileIndex', function(req,res){
  console.log(req)
    res.render('profileIndex')
})





app.listen(3000, () => console.log(`Meal Share app listening on port 3000!`));
