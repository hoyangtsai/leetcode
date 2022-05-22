/*
 * @lc app=leetcode id=1641 lang=javascript
 *
 * [1641] Count Sorted Vowel Strings
 */

/**
 * tags: #math
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
  return parseInt((n + 4) * (n + 3) * (n + 2) * (n + 1) / 24);
};
// @lc code=end


/**
 * - Time complexity: O(1).
 * - Space complexity: O(1).
 */