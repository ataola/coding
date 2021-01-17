/**
 * @param {number[][]} rectangles
 * @return {number}
 */
const countGoodRectangles = function (rectangles) {
  const obj = {};
  rectangles.forEach((item) => {
    const res = item[0] > item[1] ? item[1] : item[0];
    if (obj[res]) {
      obj[res]++;
    } else {
      obj[res] = 1;
    }
    return res;
  });
  const max = Math.max.apply(this, Object.keys(obj));
  return obj[max];
};

export default countGoodRectangles;
