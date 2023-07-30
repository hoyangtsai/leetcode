/*
 * @lc app=leetcode id=664 lang=javascript
 *
 * [664] Strange Printer
 */

/**
 * tags: #dynamic-programming
 * {@ling 486.predict-the-winner.js}
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
  const n = s.length;
  let dp = Array.from(Array(n).fill(0), () => Array(n).fill(0));

  for (let length = 1; length <= n; length++) {
    for (let left = 0; left <= n - length; left++) {
      let right = left + length - 1;
      let j = -1;
      dp[left][right] = n;
      for (let i = left; i < right; i++) {
        if (s.charAt(i) != s.charAt(right) && j == -1) {
          j = i;
        }
        if (j != -1) {
          dp[left][right] = Math.min(dp[left][right], 1 + dp[j][i] + dp[i + 1][right]);
        }
      }

      if (j == -1) {
        dp[left][right] = 0;
      }
    }
  }

  return dp[0][n - 1] + 1;
};
// @lc code=end


/**
 * - Time complexity: O(n^2)
 * - Space complexity: O(n^2)
 */