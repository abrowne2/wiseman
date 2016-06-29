var knowledge = require('../mind/list')

function fetchKnowledge() {
  //random index from js array ->
  // http://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
  var randIndex = Math.floor(Math.random()*knowledge.length);
  return "A wise man once said,\n" + knowledge[randIndex];
}

module.exports = fetchKnowledge();
