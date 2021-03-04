const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  const num = +line;
  let count = 0;
  for (let i = 1; i < num; i++) {
    if (isPerfectNumber(i)) {
      count++;
    }
  }
  console.log(count);
});

function isPerfectNumber(n) {
  const arr = [];
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  const target = arr.reduce((pre, cur) => pre + cur, 0);
  return target === n;
}
