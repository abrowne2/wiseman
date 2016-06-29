var knowledge = require('../mind/list')

function fetchKnowledge() {
  //random index from js array ->
  // http://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
  var randIndex = Math.floor(Math.random()*knowledge.length);
  var noCache = "A wise man once said,\n" + knowledge[randIndex];
  return noCache;
}

module.exports = fetchKnowledge();
