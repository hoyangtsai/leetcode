/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

/**
 * tags: #sliding-window
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';

  let prefix = '';
  // find shortest string length as maximum length
  let maxPrefixLength = Math.min(...strs.map(str => str.length));

  for (let i = 0; i < maxPrefixLength; i++) {
    let char = strs[0][i];
    if (strs.every(str => str[i] === char)) {
      prefix += char;
    } else {
      break;
    }
  };

  return prefix;
};
// @lc code=end


/**
 * Time complexity: O(S log m).
 * Space complexity; O(1). Used one constant extra space.
 */

console.log(longestCommonPrefix(["flower", "flow", "flight"])) // fl