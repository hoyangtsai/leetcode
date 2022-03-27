/*
 * @lc app=leetcode id=521 lang=javascript
 *
 * [521] Longest Uncommon Subsequence I
 */

/**
 * tags: #two-string-calculation
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
  if (a === b) return -1;
  return Math.max(a.length, b.length);
};
// @lc code=end


/**
 * - Time complexity: O(min(x, y)).
 * - Space complexity: O(1).
 */