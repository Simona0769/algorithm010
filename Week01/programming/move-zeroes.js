/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var j = 0;
    for(var i = 0; i < nums.length; i ++) {
        if (nums[i] != 0) {
            var temp = nums[i];
            nums[i] = nums[j];
            nums[j++] = temp;
        }
    }
 };

 /**
  * @description 另一种交换
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes1 = function(nums) {
    var j = 0;
    for(var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i];
            nums[i] = j === i ? nums[i] : 0;
            j++;
        }
    }
 };
