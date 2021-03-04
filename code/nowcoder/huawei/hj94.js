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
    func(arr[i + 1], arr[i + 3]);
  }
});

function func(election, vote) {
  const obj = {};
  let invalid_num = 0;
  const election_arr = election.trim().split(' ');
  const vote_arr = vote.trim().split(' ');
  election_arr.forEach((item) => {
    obj[item] = 0;
  });
  vote_arr.forEach((item) => {
    if (election_arr.includes(item)) {
      obj[item]++;
    } else {
      invalid_num++;
    }
  });
  for (const key in obj) {
    console.log(`${key} : ${obj[key]}`);
  }
  console.log(`Invalid : ${invalid_num}`);
}
