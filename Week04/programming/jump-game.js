/**
 * 从头遍历
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let reach = 0
    for(let i = 0; i < nums.length; i ++) {
        if (i > reach) {
            return false
        }
        reach = Math.max(reach, i + nums[i])
    }
    return true
};

/**
 * 从尾遍历
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const L = nums.length;
    let last = L - 1
    for(let i = L - 2; i >= 0; i--) {
        if (i + nums[i] >= last) {
            last = i
        }
    }
    return last === 0
};