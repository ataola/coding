import longestCommonPrefix from '../../code/leetcode/14';

describe('test function longestCommonPrefix:', () => {
  test('test case strs = []', () => {
    const res = longestCommonPrefix([]);
    expect(res).toBe('');
  });

  test('test case strs = ["flower","flow","flight"]', () => {
    const res = longestCommonPrefix(['flower', 'flow', 'flight']);
    expect(res).toBe('fl');
  });

  test('test case strs = ["dog","racecar","car"]', () => {
    const res = longestCommonPrefix(['dog', 'racecar', 'car']);
    expect(res).toBe('');
  });

  test('test case strs = ["flower","flower","flower","flower"]', () => {
    const res = longestCommonPrefix(['flower', 'flower', 'flower', 'flower']);
    expect(res).toBe('flower');
  });

  test('test case strs = ["a"]', () => {
    const res = longestCommonPrefix(['a']);
    expect(res).toBe('a');
  });
});
