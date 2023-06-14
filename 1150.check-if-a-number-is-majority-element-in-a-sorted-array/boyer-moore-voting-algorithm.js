/*
 * @lc app=leetcode id=1150 lang=javascript
 *
 * [1150] Check If a Number Is Majority Element in a Sorted Array
 */

/**
 * tags: #boyer-moore-voting-algorithm, #majority-element
 * {@link 169.majority-element.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var isMajorityElement = function(nums, target) {
  let count = 0;
  let candidate = null;
  for (const num of nums) {
    if (count == 0) candidate = num;
    count += (num == candidate) ? 1 : -1;
  }
  let firstIndex = nums.findIndex(num => num == candidate);

  return candidate == target && nums[firstIndex + parseInt(nums.length / 2)] == target;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */


console.log(isMajorityElement([2,4,5,5,5,5,5,6,6], 5))
isMajorityElement([10,100,101,101], 101)