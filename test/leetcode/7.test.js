import twoSum from '../../code/leetcode/7';

describe('test function reverse:', () => {
    
    test('test case x = 123', () => {
        const res = twoSum(123);
        expect(res).toBe(321);
    });
    
    test('test case x = -123', () => {
        const res = twoSum(-123);
        expect(res).toBe(-321);
    });
    
    test('test case x = 120', () => {
        const res = twoSum(120);
        expect(res).toBe(21);
    });

    test('test case x = 0', () => {
        const res = twoSum(0);
        expect(res).toBe(0);
    });

    test('test case x = 1534236469', () => {
        const res = twoSum(1534236469);
        expect(res).toBe(0);
    });
})