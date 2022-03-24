/*
 * @lc app=leetcode id=410 lang=javascript
 *
 * [410] Split Array Largest Sum
 */

/**
 * tags: #dynamic-programming
 * #google-interview
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
  const n = nums.length;

  let sub = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    sub[i + 1] = sub[i] + nums[i];
  }

  // dp[i][j]表示將從nums[0]到nums[i]這(i+1)個數分為j組的情況下,得到的符合題意的最小組和
  let dp = Array.from(Array(n + 1).fill(Number.MAX_VALUE),
    () => Array(m + 1).fill(Number.MAX_VALUE));

  dp[0][0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      for (let k = 0; k < i; k++) {
        dp[i][j] = Math.min(dp[i][j], Math.max(dp[k][j - 1], sub[i] - sub[k]));
      }
    }
  }

  return dp[n][m];
};
// @lc code=end


/**
 * - Time complexity: O(n^2 * m).
 * - Space complexity: (n * m).
 */