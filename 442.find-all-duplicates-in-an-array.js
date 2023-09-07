/*
 * @lc app=leetcode id=442 lang=javascript
 *
 * [442] Find All Duplicates in an Array
 */

/**
 * @momo
 * tags: #set, #find-duplicate-numbers
 * #my-interview
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let ans = [];
  let seen = new Set();
  for (const n of nums) {
    if (seen.has(n)) {
      ans.push(n);
    } else {
      seen.add(n);
    }
  }
  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 */