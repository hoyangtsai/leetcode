/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

/**
 * tags: #dynamic-programming, #01-knapsack, #背包存在問題
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const wordDictSet = new Set(wordDict);
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (const word of wordDictSet) {
      if (i >= word.length && s.substring(i - word.length, i) == word) {
        dp[i] = dp[i] || dp[i - word.length];
      }
    }
  }
  return dp[s.length];
};
// @lc code=end


/**
 * - Time complexity: O(n^3).
 * - Space complexity: O(n).
 */