let str = 'ataolaismeiamfinedonotworry';

function getMaxCountLetter(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }

  const res = {
    key: '',
    value: 0,
  }

  for (const key in obj) {
    if (obj[key] > res.value) {
      res.key = key;
      res.value = obj[key];
    }
  }
  return res;
}

function getMaxCountLetterV1(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  const max = Math.max(...Object.values(obj));
  const res = {};
  for (const key in obj) {
    if (obj[key] === max) {
      res[key] = max;
    }
  }
  return res;
}

let obj = getMaxCountLetterV1(str);
console.log(obj);