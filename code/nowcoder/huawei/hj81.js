const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];

rl.on('line', function (line) {
  arr.push(line);
});

rl.on('close', function () {
  for (let i = 0; i < arr.length; i = i + 2) {
    console.log(solution(arr[i].trim(), arr[i + 1].trim()));
  }
});

function solution(short_str, long_str) {
  const arr = long_str.split('');
  for (let i = 0; i < short_str.length; i++) {
    if (!arr.includes(short_str[i])) {
      return false;
    }
  }
  return true;
}
