/**
 * 暴力法
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const isAnagrams = (word1, word2) => {
        if (word1.length !== word2.length) {
            return false
        }
        const res = new Array(26).fill(0)
        const _start = 'a'.charCodeAt(0)
        for(let i = 0; i < word1.length; i++) {
            res[word1.charCodeAt(i) - _start]++
            res[word2.charCodeAt(i) - _start]--
        }
        for(let i = 0; i < res.length; i ++) {
            if(res[i] !== 0) {
                return false
            }
        }
        return true
    }
    const res = []
    const n = p.length
    for(let j = 0; j < s.length - n + 1; j++) {
        if (isAnagrams(s.substring(j, j + n), p)) {
            res.push(j)
        }
    }
    return res
};