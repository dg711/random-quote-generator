//const readline = require('readline');

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('quotes.json')
});


lineReader.on('line', function (line) {
  //console.log('Line from file:', line);
  line = line + ","
  console.log(line);
});