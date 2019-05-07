var user1Donor = { firstName: "Marc", lastName:"Maden",userName:"mmaden", password:"den23",dateOfBirth:"05/19/1956",Email:"mmaden@gmail.com", phone:"704-212-4567"};
var user2Volunteer = { firstName: "Lucie", lastName:"Monroe",userName:"lmonroe",password:"luce12", address:"212 troy street, columbia, NC",Email:"lmonroe@gmail.com",phone:"704-212-4567", age:"13" };

var item=[user1Donor, user2Volunteer];

var util = require('util');

var items = function(elements){
  this.elements = elements;
}
module.exports.getItems = function(){
  return item;
}
