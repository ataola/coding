import countGoodRectangles from '../../code/leetcode/5653';

describe('test function countGoodRectangles: ', () => {
  test('test case rectangles = [[5,8],[3,9],[5,12],[16,5]]', () => {
    const res = countGoodRectangles([
      [5, 8],
      [3, 9],
      [5, 12],
      [16, 5],
    ]);
    expect(res).toBe(3);
  });
  test('test case rectangles = [[2,3],[3,7],[4,3],[3,7]]', () => {
    const res = countGoodRectangles([
      [2, 3],
      [3, 7],
      [4, 3],
      [3, 7],
    ]);
    expect(res).toBe(3);
  });
});
