/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

/**
 * tags: #bit-manipulation
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let sum = 0;
  while (n != 0) {
    sum ++;
    n &= (n - 1);
  }
  return sum;
};
// @lc code=end


/**
 * The run time depends on the number of 1-bits in n. In the worst case, all bits in n are 1-bits. In case of a 32-bit integer, the run time is O(1).
 * The space complexity is O(1), since no additional space is allocated.
 */