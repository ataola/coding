const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const num = +line;
  let max = 0;
  let min = 0;
  for (let i = num >> 1; i < num; i++) {
    if (isPrime(i) && isPrime(num - i)) {
      min = num - i;
      max = i;
      break;
    }
  }
  console.log(min);
  console.log(max);
});

function isPrime(n) {
  if (n < 2) {
    return false;
  } else if (n === 2) {
    return true;
  }
  for (let i = 2; i < Math.sqrt(n) + 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
