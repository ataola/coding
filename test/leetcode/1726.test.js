import tupleSameProduct from '../../code/leetcode/1726';

describe('test function tupleSameProduct: ', () => {
  test('test case nums = [2,3,4,6]', () => {
    const res = tupleSameProduct([2, 3, 4, 6]);
    expect(res).toBe(8);
  });
  test('test case nums = [1,2,4,5,10]', () => {
    const res = tupleSameProduct([1, 2, 4, 5, 10]);
    expect(res).toBe(16);
  });
  test('test case nums = [2,3,4,6,8,12]', () => {
    const res = tupleSameProduct([2, 3, 4, 6, 8, 12]);
    expect(res).toBe(40);
  });
  test('test case nums = [2,3,5,7]', () => {
    const res = tupleSameProduct([2, 3, 5, 7]);
    expect(res).toBe(0);
  });
  test('test case nums = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192]', () => {
    const res = tupleSameProduct([
      1,
      2,
      4,
      8,
      16,
      32,
      64,
      128,
      256,
      512,
      1024,
      2048,
      4096,
      8192,
    ]);
    expect(res).toBe(1288);
  });
});
