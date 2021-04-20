const strStr = function (haystack, needle) {
  if (needle === '') {
    return 0;
  }
  const haystack_len = haystack.length;
  const needle_len = needle.length;
  if (needle_len > haystack_len) {
    return -1;
  } else if (needle_len === haystack_len) {
    return haystack === needle ? 0 : -1;
  }
  const target = needle[0];
  const position = [];
  for (const index in haystack) {
    if (haystack[index] === target) {
      position.push(+index);
    }
  }
  for (const left of position) {
    let right = left;
    for (let i = 0; i < needle_len; i++) {
      if (haystack[right] === needle[i]) {
        if (i === needle_len - 1) {
          return left;
        }
        right++;
      } else {
        break;
      }
    }
  }
  return -1;
};

export default strStr;
