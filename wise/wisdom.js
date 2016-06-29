var exports = module.exports = {};

var wisdom = require('../mind/list')

exports.fetchKnowledge = function() {
  //random index from js array ->
  // http://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
  return wisdom[Math.floor(Math.random()*wisdom.length)];
}
