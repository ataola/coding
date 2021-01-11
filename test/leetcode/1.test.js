import twoSum from '../../code/leetcode/1';

describe('test function twoSum:', () => {
    
    test('test case nums = [3, 3], target = 6', () => {
        const data = twoSum([3, 3], 6);
        expect(data).toEqual([0, 1]);
    });
    
    test('test case nums = [2,7,11,15], target = 9', () => {
        const data = twoSum([2,7,11,15], 9);
        expect(data).toEqual([0, 1]);
    });
    
    test('test case nums = [3,2,4], target = 6', () => {
        const data = twoSum([3,2,4], 6);
        expect(data).toEqual([1, 2]);
    });
})