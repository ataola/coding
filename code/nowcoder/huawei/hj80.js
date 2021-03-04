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
  for (let i = 0; i < arr.length; i = i + 4) {
    console.log(solution(arr[i + 1], arr[i + 3]));
  }
});

function solution(str1, str2) {
  const arr1 = str1.split(' ');
  const arr2 = str2.split(' ');
  return [...new Set(arr1.concat(arr2))].sort((a, b) => a - b).join('');
}
