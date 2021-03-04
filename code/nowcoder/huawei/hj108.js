const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  const [a, b] = line.split(' ').map((item) => Number(item));
  let min_num = a > b ? a : b;
  while (min_num % a !== 0 || min_num % b !== 0) {
    min_num++;
  }
  console.log(min_num);
});
