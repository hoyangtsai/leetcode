/*
 * @lc app=leetcode id=137 lang=javascript
 *
 * [137] Single Number II
 */

/**
 * tags: #bit-manipulation, #bitmask
 * {@link 136.single-number/bit-manipulation.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // Initialize seenOnce and seenTwice to 0
  let seenOnce = 0, seenTwice = 0;

  // Iterate through nums
  for (let num of nums) {
    // Update using derived equations
    seenOnce = (seenOnce ^ num) & (~seenTwice);
    seenTwice = (seenTwice ^ num) & (~seenOnce);
  }

  // Return integer which appears exactly once
  return seenOnce;
};
// @lc code=end


/**
 * - Time complexity: O(N)
 * - Space complexity: O(1)
 */