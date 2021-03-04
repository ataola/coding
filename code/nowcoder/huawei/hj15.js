const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  console.log(
    Number(line)
      .toString(2)
      .split('')
      .filter((item) => item === '1').length
  );
});
