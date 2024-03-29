/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

/**
 * tags: #array-string-common
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';

  let prefix = strs[0];
  for (const s of strs) {
    // "lee".indexOf("leetcode") return -1
    // not found sub-string yet
    while (s.indexOf(prefix) != 0) { // s.indexOf(prefix) = -1
      prefix = prefix.substring(0, prefix.length - 1);
      // all sub-string not match
      if (prefix === '') return '';
    }
  }
  return prefix;
};
// @lc code=end


/**
 * - Time complexity: O(S).
 * - Space complexity; O(1). We use one constant extra space.
 */

console.log(longestCommonPrefix(['leets', 'leetcode', 'leet', 'leeds'])) // lee
