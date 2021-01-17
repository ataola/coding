import decode from '../../code/leetcode/1720';

describe('test function decode: ', () => {
  test('test case encoded = [1,2,3], first = 1', () => {
    const res = decode([1, 2, 3], 1);
    expect(res).toEqual([1, 0, 2, 1]);
  });

  test('test case encoded = [6,2,7,3], first = 4', () => {
    const res = decode([6, 2, 7, 3], 4);
    expect(res).toEqual([4, 2, 0, 7, 4]);
  });
});
