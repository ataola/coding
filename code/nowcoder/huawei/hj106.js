const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  let res = '';
  for (let i = line.length - 1; i >= 0; i--) {
    res += line[i];
  }
  console.log(res);
});
