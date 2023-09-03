/*
 * @lc app=leetcode id=646 lang=javascript
 *
 * [646] Maximum Length of Pair Chain
 */

/**
 * tags: #dynamic-programming, #maximum-number-pair-range
 * @see 646.maximum-length-of-pair-chain/greedy.js
 */

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  pairs = pairs.sort((a, b) => a[0] - b[0]);

  const N = pairs.length;
  // initial state: maximum length for each pair is 1
  let dp = Array(N).fill(1);

  for (let j = 1; j < N; ++j) {
    for (let i = 0; i < j; ++i) {
      // second number less than next first number, check which has max length
      if (pairs[i][1] < pairs[j][0])
        dp[j] = Math.max(dp[j], dp[i] + 1);
    }
  }

  let ans = Math.max(...dp);

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(N^2) where N is the length of pairs. There are two for loops, and N^2 dominates the sorting step.
 * - Space complexity: O(N) for sorting and store dp.
 */