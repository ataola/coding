const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  const score = getScore(line);
  if (score >= 90) {
    console.log('VERY_SECURE');
  } else if (score >= 80) {
    console.log('SECURE');
  } else if (score >= 70) {
    console.log('VERY_STRONG');
  } else if (score >= 60) {
    console.log('STRONG');
  } else if (score >= 50) {
    console.log('AVERAGE');
  } else if (score >= 25) {
    console.log('WEAK');
  } else if (score >= 0) {
    console.log('VERY_WEAK');
  }
});

function getScore(line) {
  let score = 0;
  let has_number = false;
  let has_symbol = false;
  let has_upper_letter = false;
  let has_lower_letter = false;

  const len = line.length;
  if (len <= 4) {
    score += 5;
  } else if (len >= 5 && len <= 7) {
    score += 10;
  } else if (len >= 8) {
    score += 25;
  }

  if (/[A-Z]/.test(line)) {
    score += 10;
    has_upper_letter = true;
  }
  if (/[a-z]/.test(line)) {
    score += 10;
    has_lower_letter = true;
  }

  const number_len = line.match(/\d+/g)
    ? line.match(/\d+/g).join('').length
    : 0;
  if (number_len === 1) {
    score += 10;
    has_number = true;
  } else if (number_len > 1) {
    score += 20;
    has_number = true;
  }

  const symbol_len = line.match(/[^\w]/g)
    ? line.match(/[^\w]/g).join('').length
    : 0;
  if (symbol_len === 1) {
    score += 10;
    has_symbol = true;
  } else if (symbol_len > 1) {
    score += 25;
    has_symbol = true;
  }

  if (has_number && (has_upper_letter || has_lower_letter) && !has_symbol) {
    score += 2;
  } else if (has_number && has_upper_letter && has_lower_letter && has_symbol) {
    score += 5;
  } else if (
    has_number &&
    (has_upper_letter || has_lower_letter) &&
    has_symbol
  ) {
    score += 3;
  }

  return score;
}
