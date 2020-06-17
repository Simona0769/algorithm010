/**
 * 暴力法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length -1 ; i ++) {
        for (var j = i + 1; j < nums.length; j ++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            } 
        }
    }
};

/**
 * 两遍哈希
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hashmap = {};
    for(var i = 0; i < nums.length; i ++) {
        if (hashmap[nums[i]] === void 0) {
            hashmap[nums[i]] = i;
        }
    }
    for (var j = 0; j < nums.length; j ++) {
        var _num = target - nums[j];
        if (hashmap[_num] !== void 0 && hashmap[_num] !== j) {
            return [j, hashmap[_num]]
        }
    }
};

/**
 * 一遍哈希
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let _map = new Map();
    for(var i = 0; i < nums.length; i ++) {
        if (!_map.has(nums[i])) {
            _map.set(nums[i], i);
        }
        var _num = target - nums[i];
        if (_map.has(_num) && _map.get(_num) !== i) {
            return [_map.get(_num), i]
        }
    }
};