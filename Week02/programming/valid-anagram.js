/**
 * 两个hashmap
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }
    var hm1 = new Map();
    var hm2 = new Map();
    for (var i = 0; i < s.length; i ++) {
        if (hm1.has(s[i])) {
            hm1.set(s[i], hm1.get(s[i]) + 1)
        } else {
            hm1.set(s[i], 1)
        }
        if (hm2.has(t[i])) {
            hm2.set(t[i], hm2.get(t[i]) + 1)
        } else {
            hm2.set(t[i], 1)
        }
    }
    for(let key of hm1.keys()) {
        if (!hm2.has(key) || hm2.get(key) !== hm1.get(key)) {
            return false
        }
    }
    return true
};

/**
 * 计数器
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }
    let counter = new Array(26).fill(0);
    var aCode = 'a'.charCodeAt(0);
    for (var i = 0; i < s.length; i ++) {
        counter[s.charCodeAt(i) - aCode]++
        counter[t.charCodeAt(i) - aCode]--
    }
    for(var j = 0; j < counter.length; j ++) {
        if (counter[j] < 0) {
            return false
        }
    }
    return true
};