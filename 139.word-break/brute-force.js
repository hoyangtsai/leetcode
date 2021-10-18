/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  function isStringContainWord(s, wordDictSet, start, memo) {
    if (start == s.length) {
      return true;
    }
    if (memo[start]) {
      return memo[start];
    }
    for (let end = start + 1; end <= s.length; end++) {
      if (wordDictSet.has(s.substring(start, end)) && isStringContainWord(s, wordDictSet, end, memo)) {
        return memo[start] = true;
      }
    }
    return memo[start] = false;
  }

  return isStringContainWord(s, new Set(wordDict), 0, new Array(s.length).fill(false));
};
// @lc code=end


/**
 * Brute Force and Recursion with memorization
 * 
 * - Time complexity: O(2^n). Give a string of length n, there are n + 1 ways to split it into two parts.
 * - Space complexity: O(n).
 */