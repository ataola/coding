/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    const str = Math.abs(x).toString();
    const str_reverse = str.split('').reverse().join('');
    return x >= 0 ? Number(str_reverse) > Math.pow(2, 31) - 1 ? 0 : Number(str_reverse) : -Number(str_reverse) < Math.pow(-2, 31) ? 0 : -Number(str_reverse);
};

export default reverse;