import twoSum from '../../code/leetcode/1';

test('test function twoSum', () => {
    const data = twoSum([3, 3], 6);
    expect(data).toEqual([0, 1]);
});