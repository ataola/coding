import strStr from '../../code/leetcode/28';

describe('test function strStr:', () => {
  test('test case str="mississippi", needle="mississippii", target = -1', () => {
    const data = strStr('mississippi', 'mississippii');
    expect(data).toEqual(-1);
  });

  test('test case str="mississippi", needle="mississippii", target = -1', () => {
    const data = strStr('mississippi', 'issi');
    expect(data).toEqual(1);
  });

  test('test case str="a", needle="a", target = 0', () => {
    const data = strStr('a', 'a');
    expect(data).toEqual(0);
  });

  test('test case str="abc", needle="c", target = 2', () => {
    const data = strStr('abc', 'c');
    expect(data).toEqual(2);
  });

  test('test case str="hello", needle="ll", target = 2', () => {
    const data = strStr('hello', 'll');
    expect(data).toEqual(2);
  });

  test('test case str="aaaaa", needle="bba", target = -1', () => {
    const data = strStr('aaaaa', 'bba');
    expect(data).toEqual(-1);
  });

  test('test case str="", needle="", target = 0', () => {
    const data = strStr('', '');
    expect(data).toEqual(0);
  });
});
