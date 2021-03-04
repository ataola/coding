const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const obj = {};
  for (let i = 0; i < line.length; i++) {
    if (obj[line[i]]) {
      obj[line[i]]++;
    } else {
      obj[line[i]] = 1;
    }
  }
  const arr = Object.keys(obj);
  arr.sort((a, b) => {
    if (obj[a] === obj[b]) {
      return a.charCodeAt(0) - b.charCodeAt(0);
    } else {
      return obj[b] - obj[a];
    }
  });
  console.log(arr.join(''));
});
