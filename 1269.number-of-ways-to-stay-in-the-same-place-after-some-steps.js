/*
 * @lc app=leetcode id=1269 lang=javascript
 *
 * [1269] Number of Ways to Stay in the Same Place After Some Steps
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
  const MOD = 1e9 + 7;
  arrLen = Math.min(arrLen, steps);

  let dp = Array.from(Array(arrLen).fill(0), () => Array(steps + 1).fill(0));
  dp[0][0] = 1;

  for (let remain = 1; remain <= steps; remain++) {
    for (let curr = arrLen - 1; curr >= 0; curr--) {
      let ans = dp[curr][remain - 1];
      
      if(curr > 0) {
        ans = (ans + dp[curr - 1][remain - 1]) % MOD;
      }

      if (curr < arrLen - 1) {
        ans = (ans + dp[curr + 1][remain - 1]) % MOD;
      }

      dp[curr][remain] = ans;
    } 
  }

  return dp[0][steps];
};
// @lc code=end


/**
 * - Time complexity: O(n * min(n, m))
 * - Space complexity: O(n * min(n, m))
 */