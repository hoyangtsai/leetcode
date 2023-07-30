/*
 * @lc app=leetcode id=664 lang=javascript
 *
 * [664] Strange Printer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
  const n = s.length;
  let dp = Array.from(Array(n).fill(0), () => Array(n).fill(0));

  for (let left = 0; left < n; left++) {
    for (let right = 0; right < n; right++) {
      dp[left][right] = -1;
    }
  }

  function solve(left, right) {
    if (dp[left][right] != -1) {
      return dp[left][right];
    }
    
    dp[left][right] = n;
    let j = -1;
    for (let i = left; i < right; i++) {
      if (s.charAt(i) != s.charAt(right) && j == -1) {
        j = i;
      }
      if (j != -1) {
        dp[left][right] = Math.min(dp[left][right], 1 + solve(j, i) + solve(i + 1, right));
      }
    }
    
    if (j == -1) {
      dp[left][right] = 0;
    }

    return dp[left][right];
  }

  return solve(0, n - 1) + 1;
};
// @lc code=end


/**
 * - Time complexity: O(n^2)
 * - Space complexity: O(n^2)
 */