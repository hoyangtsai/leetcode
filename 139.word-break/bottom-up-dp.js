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
  let dp = new Array(s.length).fill(false);

  for (let i = 0; i < s.length; i++) {
    for (const word of wordDict) {
      // Handle out of bounds case
      if (i < word.length - 1) {
        continue;
      }

      if (i === word.length - 1 || dp[i - word.length]) {
        if (s.substring(i - word.length + 1, i + 1) === word) {
          dp[i] = true;
          break;
        }
      }
    }
  }

  return dp[s.length - 1];
};
// @lc code=end


/**
 * - Time complexity: O(n * m * k).
 * - Space complexity: O(n).
 */