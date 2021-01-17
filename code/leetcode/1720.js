/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
const decode = function (encoded, first) {
  const arr = [first];
  for (let i = 0; i < encoded.length; i++) {
    const res = encoded[i] ^ arr[i];
    arr.push(res);
  }
  return arr;
};

export default decode;
