/*
 * @lc app=leetcode id=2466 lang=javascript
 *
 * [2466] Count Ways To Build Good Strings
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
  // Use dp[i] to record to number of good strings of length i.
  let dp = Array(high + 1).fill(0);
  dp[0] = 1;
  let mod = 10 ** 9 + 7;
  
  // Iterate over each length `end`.
  for (let end = 1; end <= high; ++end) {
    // check if the current string can be made by append zero `0`s or one `1`s.
    if (end >= zero) {
      dp[end] += dp[end - zero];
    }
    if (end >= one) {
      dp[end] += dp[end - one];
    }
    dp[end] %= mod;
  }

  let ans = 0;
  for (let i = low; i <= high; ++i) {
    ans += dp[i];
    ans %= mod;
  }
  return ans;
};
// @lc code=end

/**
 * - Time complexity: O(high).
 * - Space complexity: O(high).
 */