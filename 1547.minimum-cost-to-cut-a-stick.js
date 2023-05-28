/*
 * @lc app=leetcode id=1547 lang=javascript
 *
 * [1547] Minimum Cost to Cut a Stick
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {
  const m = cuts.length;
  let newCuts = Array.from([0, ...cuts, n]);
  newCuts.sort((a, b) => a - b);

  let dp = Array.from(Array(m + 2).fill(0), () => Array(m + 2).fill(0));
  for (let diff = 2; diff < m + 2; ++diff) {
    for (let left = 0; left < m + 2 - diff; ++left) {
      let right = left + diff;
      let ans = Number.MAX_VALUE;
      for (let mid = left + 1; mid < right; ++mid) {
        ans = Math.min(ans, dp[left][mid] + dp[mid][right] + newCuts[right] - newCuts[left]);
      }
      dp[left][right] = ans;
    }
  }

  return dp[0][m + 1];
};
// @lc code=end


/**
 * - Time complexity: O(m^3).
 * - Space complexity: O(m^2).
 */