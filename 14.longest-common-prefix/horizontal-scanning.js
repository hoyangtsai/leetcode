/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @amazon, @facebook, @adobe, @apple, @microsoft, @
// #string

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
};
// @lc code=end

/**
 * Horizontal scanning
 * 
 * Time complexity: 𝑂(𝑆).
 * Space complexity; 𝑂(1). We use one constant extra space.
 */
