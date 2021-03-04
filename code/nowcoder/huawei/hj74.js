const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  const arr = [];
  let str = '';
  for (let i = 0; i < line.length; i++) {
    if (line[i] !== ' ') {
      str += line[i];
    } else {
      if (str.startsWith('“') || str.startsWith('"')) {
        if (str.endsWith('”') || str.endsWith('"')) {
          arr.push(str.slice(1, str.length - 1));
          str = '';
        } else {
          str += line[i];
        }
      } else {
        arr.push(str);
        str = '';
      }
    }
    if (i === line.length - 1) {
      if (str.startsWith('“') || str.startsWith('"')) {
        arr.push(str.slice(1, str.length - 1));
      } else {
        arr.push(str);
      }
    }
  }
  console.log(arr.length);
  for (const val of arr) {
    console.log(val);
  }
});
