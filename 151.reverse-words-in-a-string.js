/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */

/**
 * @Nvidia
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.split(/\s+/).filter(it => it.length > 0).reverse().join(' ');
};
// @lc code=end

