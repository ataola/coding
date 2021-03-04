const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  splitStr(line);
});

function splitStr(str) {
  const len = str.length;
  if (len > 8) {
    console.log(str.slice(0, 8));
    splitStr(str.slice(8, len));
  } else if (len === 8) {
    console.log(str);
  } else {
    console.log((str + '00000000').slice(0, 8));
  }
}
