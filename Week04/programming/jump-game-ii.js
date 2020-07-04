/**
 * 顺数
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let end = 0
    let maxPosition = 0
    let step = 0
    for(let i = 0; i < nums.length - 1; i++) {
        maxPosition = Math.max(maxPosition, nums[i] + i)
        if (i === end) {
            end = maxPosition
            step++
        }
    }
    return step
};

/**
 * 倒数
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let position = nums.length - 1
    let step = 0
    while(position > 0) {
        for(let i = 0; i < nums.length - 1; i ++) {
            if (nums[i] >= position - i) {
                position = i
                step++
                break;
            }
        }
    }
    return step
};