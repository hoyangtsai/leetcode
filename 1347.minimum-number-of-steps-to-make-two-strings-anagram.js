/*
 * @lc app=leetcode id=1347 lang=javascript
 *
 * [1347] Minimum Number of Steps to Make Two Strings Anagram
 */

/**
 * tags: #anagram, #alphabet-table
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  let count = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 'a'.charCodeAt()]++;
    count[t.charCodeAt(i) - 'a'.charCodeAt()]--;
  }

  let step = 0;
  for (let i = 0; i < 26; i++) {
    if (count[i] > 0) step += count[i];
  }

  return step;
};
// @lc code=end

