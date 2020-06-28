/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let table = new Map()
    table.set('2', 'abc')
    table.set('3', 'def')
    table.set('4', 'ghi')
    table.set('5', 'jkl')
    table.set('6', 'mno')
    table.set('7', 'pqrs')
    table.set('8', 'tuv')
    table.set('9', 'wxyz')

    let ans = [];
    if (!digits) {
        return []
    }

    let helper = (ans, digits, str, index) => {
        if (index === digits.length) {
            ans.push(str)
            return
        }
        let _chars = table.get(digits[index])
        for (let i = 0; i < _chars.length; i ++) {
            helper(ans, digits, str + _chars[i], index + 1)
        }
    }
    helper(ans, digits, '', 0)
    return ans
};