const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  solution(line);
});

function solution(str) {
  const arr = new Array(4).fill(0);
  for (let i = 0; i < str.length; i++) {
    if (/[a-z]|[A-Z]/.test(str[i])) {
      arr[0]++;
    } else if (str[i] === ' ') {
      arr[1]++;
    } else if (/\d/.test(str[i])) {
      arr[2]++;
    } else {
      arr[3]++;
    }
  }
  for (const val of arr) {
    console.log(val);
  }
}
