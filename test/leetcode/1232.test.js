import checkStraightLine from '../../code/leetcode/1232';

describe('test function checkStraightLine: ', () => {
  test('test case coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]', () => {
    const res = checkStraightLine([
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
    ]);
    expect(res).toBe(true);
  });
  test('test case coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]', () => {
    const res = checkStraightLine([
      [1, 1],
      [2, 2],
      [3, 4],
      [4, 5],
      [5, 6],
      [7, 7],
    ]);
    expect(res).toBe(false);
  });
  test('test case coordinates = [[1,2],[2,3],[3,5]]', () => {
    const res = checkStraightLine([
      [1, 2],
      [2, 3],
      [3, 5],
    ]);
    expect(res).toBe(false);
  });
  test('test case coordinates = [[0,0],[0,1],[0,-1]]', () => {
    const res = checkStraightLine([
      [0, 0],
      [0, 1],
      [0, -1],
    ]);
    expect(res).toBe(true);
  });
  test('test case coordinates = [[0,0],[0,5],[5,5],[5,0]]', () => {
    const res = checkStraightLine([
      [0, 0],
      [0, 5],
      [5, 5],
      [5, 0],
    ]);
    expect(res).toBe(false);
  });
});
