const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  const res = line.replace(/[\[\{]/g, '(').replace(/[\]\}]/g, ')');
  console.log(eval(res));
});
