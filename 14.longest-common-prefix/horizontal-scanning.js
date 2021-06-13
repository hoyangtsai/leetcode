/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';

  let prefix = strs[0];
  for (const s of strs) {
    // "lee".indexOf("leetcode") return -1
    while (s.indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === '') return '';
    }
  }
  return prefix;
  /**
   * Horizontal scanning
   * Time complexity: O(S).
   * Space complexity; O(1). Used one constant extra space.
   */
};
// @lc code=end

