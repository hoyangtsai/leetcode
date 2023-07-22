/*
 * @lc app=leetcode id=1230 lang=javascript
 *
 * [1230] Toss Strange Coins
 */

/**
 * tags: #dynamic-programming, #probability
 */

// @lc code=start
/**
 * @param {number[]} prob
 * @param {number} target
 * @return {number}
 */
var probabilityOfHeads = function(prob, target) {
  const n = prob.length;

  // dp[c][k] is the possibility to get k face with c coin
  let dp = Array.from(Array(n + 1).fill(0), () => Array(target + 1).fill(0));
  dp[0][0] = 1;

  // there is no coin to get k face
  for (let k = 1; k <= target; k++) dp[0][k] = 0;

  // there are coin to get 0 face
  for (let c = 1; c <= n; c++) {
    dp[c][0] = dp[c - 1][0] * (1 - prob[c - 1]);
  }

  for (let c = 1; c <= n; c++) {
    for (let k = 1; k <= target; k++) {
      let i = c - 1;
      let kFace = dp[c - 1][k - 1] * prob[i];
      let kNotFace = dp[c - 1][k] * (1 - prob[i]);
      dp[c][k] = kFace + kNotFace;
    }
  }

  return dp[n][target];
};
// @lc code=end


/**
 * - Time complexity: O(n * target).
 * - Space complexity: O(n * target).
 */

probabilityOfHeads([0.5, 0.5, 0.5, 0.5, 0.5], 0);