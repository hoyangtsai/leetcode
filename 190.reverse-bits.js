/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result <<= 1; // Shift result to the left to make space for the next bit
    // odd & 1 = 1, even & 1 = 0
    // even | 1 = even + 1, odd | 1 = odd
    result |= (n & 1); // Add the least significant bit of n to result
    n >>= 1; // Shift n to the right to process the next bit
  }
  return result >>> 0; // Ensure the result is treated as an unsigned integer
};
// @lc code=end

