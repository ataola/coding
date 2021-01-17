/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = function (coordinates) {
  const len = coordinates.length;
  if (len === 2) {
    return true;
  }
  const x1 = coordinates[1][0] - coordinates[0][0];
  const y1 = coordinates[1][1] - coordinates[0][1];
  for (let i = 0; i < len; i++) {
    const x2 = coordinates[i][0] - coordinates[0][0];
    const y2 = coordinates[i][1] - coordinates[0][1];
    if (x1 * y2 !== x2 * y1) {
      return false;
    }
  }
  return true;
};

export default checkStraightLine;
