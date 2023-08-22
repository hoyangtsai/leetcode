/*
 * @lc app=leetcode id=459 lang=javascript
 *
 * [459] Repeated Substring Pattern
 */

/**
 * tags: #sting-repeat, #string-mirror
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  const t = s.repeat(2).slice(1, -1);
  return t.includes(s);
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 */