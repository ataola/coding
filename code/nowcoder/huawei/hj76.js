const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  const num = +line;
  const first = num * num + 1 - num;
  let str = '';
  for (let i = 0; i < num; i++) {
    str = str + '+' + (first + 2 * i);
  }
  console.log(str.slice(1));
});
