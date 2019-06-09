/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj.hasOwnProperty(target - nums[i])) {
            result.push(obj[target - nums[i]])
            result.push(i)
            break;
        }
        obj[nums[i]] = i;
    }
    return result
};

