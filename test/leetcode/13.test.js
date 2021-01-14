import romanToInt from '../../code/leetcode/13';

describe('test function romanToInt:', () => {
    
    test('test case s = MCMXCIV', () => {
        const res = romanToInt('MCMXCIV');
        expect(res).toBe(1994);
    });
    
    test('test case s = III', () => {
        const res = romanToInt('III');
        expect(res).toBe(3);
    });
    
    test('test case s = DCXXI', () => {
        const res = romanToInt('DCXXI');
        expect(res).toBe(621);
    });

    test('test case s = MDCXCV', () => {
        const res = romanToInt('MDCXCV');
        expect(res).toBe(1695);
    });
})
