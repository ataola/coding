const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  const num = +line;
  const res = ((1 + 3 * num) * num) / 2;
  console.log(res);
});
