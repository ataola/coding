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
  const min = Math.min.apply(null, Object.values(obj));
  const arr = [];
  for (const key in obj) {
    if (obj[key] === min) {
      arr.push(key);
    }
  }
  let res = '';
  for (let i = 0; i < line.length; i++) {
    if (!arr.includes(line[i])) {
      res += line[i];
    }
  }
  console.log(res);
});
