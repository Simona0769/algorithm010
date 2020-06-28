/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if (!nums && nums.length === 0) {
        return nums
    }
    let ans = []
    let helper = (ans, nums, list, index) => {
        if (index === nums.length) {
            ans.push(list)
            return
        }

        helper(ans, nums, [...list], index + 1)

        list.push(nums[index])
        helper(ans, nums, [...list], index + 1)

    }
    helper(ans, nums, [], 0)
    return ans

    
};