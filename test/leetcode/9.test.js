import isPalindrome from '../../code/leetcode/9';

describe('test function isPalindrome:', () => {
    
    test('test case x = 121', () => {
        const res = isPalindrome(121);
        expect(res).toBe(true);
    });
    
    test('test case x = -121', () => {
        const res = isPalindrome(-123);
        expect(res).toBe(false);
    });
    
    test('test case x = 10', () => {
        const res = isPalindrome(10);
        expect(res).toBe(false);
    });
})