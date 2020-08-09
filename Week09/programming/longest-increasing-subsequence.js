/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(nums.length <= 0) {
        return 0
    }
    const dp = []
    dp[0] = 1;
    let max = 1;
    for(let i = 1; i < nums.length; i++) {
        let _max = 0;
        for(let j = 0; j <= i; j ++) {
            if (nums[i] > nums[j]) {
                _max = Math.max(_max, dp[j])
            }
        }
        dp[i] = _max + 1;
        max = Math.max(max, dp[i])
    }
    return max
};