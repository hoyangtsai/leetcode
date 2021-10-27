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
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';

  let low = 0;
  // find shortest string length as maximum length
  let high = Math.min(...strs.map(str => str.length));

  function isCommonPrefix(strs, len) {
    let str1 = strs[0].substring(0, len);
    // first string compare with the others
    for (let i = 1; i < strs.length; i++) {
      if (!strs[i].startsWith(str1)) {
        return false
      }
    }
    return true;
  }

  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    if (isCommonPrefix(strs, mid)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return strs[0].substring(0, parseInt((low + high) / 2));
};
// @lc code=end

/**
 * Binary search
 * 
 * - Time complexity: O(S * log m), where S is the sum of all characters in all strings.
 *   The algorithm makes log m iterations for each of them there are S m comparisons, which gives in total O(S * log m) time complexity.
 * - Space complexity; O(1). We only used one constant extra space.
 */

console.log('["flower","flow","flight"] =>', longestCommonPrefix(["flower", "flow", "flight"]));
