/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @facebook, @amazon, @microsoft, @uber, @google
// #dynamic-programming

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
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDictSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    } 
  }
  return dp[s.length];
};
// @lc code=end


/**
 * Dynamic programming
 * 
 * - Time complexity: O(n^3).
 * - Space complexity: O(n).
 */