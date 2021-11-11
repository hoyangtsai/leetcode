/*
 * @lc app=leetcode id=646 lang=javascript
 *
 * [646] Maximum Length of Pair Chain
 */

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  pairs = pairs.sort((a, b) => a[0] - b[0]);
  let N = pairs.length;
  let dp = Array(N).fill(1);

  for (let j = 1; j < N; ++j) {
    for (let i = 0; i < j; ++i) {
      if (pairs[i][1] < pairs[j][0])
        dp[j] = Math.max(dp[j], dp[i] + 1);
    }
  }

  let ans = 0;
  for (const x of dp) {
    if (x > ans) ans = x;
  }

  return ans;
};
// @lc code=end

