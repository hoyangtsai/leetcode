/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

/**
 * tags: #bit-manipulation
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  let ans = Array(n + 1).fill(0);
  let x = 0;
  let b = 1;

  // [0, b) is calculated
  while (b <= n) {
    // generate [b, 2b) or [b, n) from [0, b)
    while (x < b && x + b <= n) {
      ans[x + b] = ans[x] + 1;
      ++x;
    }
    x = 0; // reset x
    b <<= 1; // b = 2b
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */