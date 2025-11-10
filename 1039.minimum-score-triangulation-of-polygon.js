/*
 * @lc app=leetcode id=1039 lang=javascript
 *
 * [1039] Minimum Score Triangulation of Polygon
 */

// @lc code=start
/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function(values) {
  const n = values.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(0));

  for (let length = 2; length < n; length++) {
    for (let i = 0; i + length < n; i++) {
      const j = i + length;
      dp[i][j] = Infinity;

      for (let k = i + 1; k < j; k++) {
        const score = values[i] * values[j] * values[k] + dp[i][k] + dp[k][j];
        dp[i][j] = Math.min(dp[i][j], score);
      }
    }
  }

  return dp[0][n - 1];
};
// @lc code=end

