const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  const count = +line;
  let res = '';
  for (let i = 0; i < count; i++) {
    res += 'ABCD';
  }
  console.log(res);
});
