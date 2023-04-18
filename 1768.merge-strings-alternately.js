/*
 * @lc app=leetcode id=1768 lang=javascript
 *
 * [1768] Merge Strings Alternately
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  const maxLen = Math.max(word1.length, word2.length);

  let res = '';
  for (let i = 0; i < maxLen; i++) {
    if (i < word1.length) {
      res += word1[i];
    }
    if (i < word2.length) {
      res += word2[i];
    }
  }

  return res;
};
// @lc code=end

