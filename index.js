var express = require('express')
var app = express()
var path = require('path');

app.set ('view engine','ejs');
//app.use('/views',express.static('views'))
//app.use('/ressources',express.static('ressources'))
//app.use('/assets', express.static(__dirname +'/../resources'));

//app.get('/', (req, res) => res.render('store'));

app.get('/', function(req, res){

res.render('store');
});

app.listen(3000, () => console.log(`Meal Share app listening on port 3000!`));
