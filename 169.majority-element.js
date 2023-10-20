/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

/**
 * tags: #boyer-moore-voting-algorithm, #majority-element
 * {@link 229.majority-element-ii.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = 0;
  let candidate = null;

  for (const n of nums) {
    // when count is zero takes any number as a candidate
    if (count == 0) {
      candidate = n;
    }
    // if the current number is not the candidate number
    // the count subtracts 1, vice versa adds 1
    count += n == candidate ? 1 : -1;
  }

  return candidate;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */
