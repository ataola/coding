/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    const left = x.toString();
    const right = left.split('').reverse().join('');
    return left === right;
};

export default isPalindrome;