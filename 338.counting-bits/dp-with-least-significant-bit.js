/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

/**
 * tags: #bit-manipulation, #dynamic-programming
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  let ans = Array(n + 1).fill(0);
  for (let x = 1; x <= n; x++) {
    // x / 2 is x >> 1 and
    // x % 2 is x & 1
    ans[x] = ans[x >> 1] + (x & 1); 
  }
  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */