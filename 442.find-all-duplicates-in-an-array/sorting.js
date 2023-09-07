/*
 * @lc app=leetcode id=442 lang=javascript
 *
 * [442] Find All Duplicates in an Array
 */

/**
 * tags: #sorting
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  nums.sort((a, b) => a - b);
  let ans = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      ans.push(nums[i]);
      i++; // skip next element
    }
  }
  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n log n)
 * - Space complexity: O(n)
 */