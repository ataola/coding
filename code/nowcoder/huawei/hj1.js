const { read } = require('fs');
const readline = require('readline');

const rd = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rd.on('line', function (line) {
  console.log(line.split(' ').slice(-1)[0].length);
});
