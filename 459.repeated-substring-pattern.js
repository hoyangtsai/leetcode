/*
 * @lc app=leetcode id=459 lang=javascript
 *
 * [459] Repeated Substring Pattern
 */

/**
 * tags: #repeat-string, #mirror, 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  return s.repeat(2).slice(1, -1).includes(s);
};
// @lc code=end


repeatedSubstringPattern("aba")
repeatedSubstringPattern("abab")