/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var result = []
    nums.sort(function(a, b) {
        return a - b ;
    })
    for(var k = 0; k < nums.length - 2; k ++) {
        if (nums[k] > 0) {
            break;
        } 
        if (k > 0 && nums[k] === nums[k - 1]) continue;
        var i = k + 1, j = nums.length - 1;
        while (i < j) {
            var _result = nums[k] + nums[i] + nums[j];
            if (_result < 0) {
                while (i < j && nums[i] === nums[++i]);
            } else if (_result > 0) {
                while(i < j && nums[j] === nums[--j]);
            } else {
                result.push([nums[k], nums[i], nums[j]]);
                while (i < j && nums[i] === nums[++i]);
                while(i < j && nums[j] === nums[--j]);
            }
        }
    }
    return result
};