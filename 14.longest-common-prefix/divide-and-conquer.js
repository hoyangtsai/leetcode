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

  function commonPrefix(str1, str2) {
    const min = Math.min(str1.length, str2.length);
    for (let i = 0; i < min; i++) {
      if (str1.charAt(i) != str2.charAt(i)) {
        return str1.substring(0, i);
      }
    }
    return str1.substring(0, min);
  }

  function getLongestCommonPrefix(l, r) {
    if (l == r) return strs[l];

    let mid = parseInt((l + r) / 2);
    let strLeft = getLongestCommonPrefix(l, mid);
    let strRight = getLongestCommonPrefix(mid + 1, r);

    return commonPrefix(strLeft, strRight);
  }

  return getLongestCommonPrefix(0, strs.length - 1);
};
// @lc code=end

/**
 * Divide and Conquer
 * 
 * - Time complexity: O(S), where S is the number of all characters in the array, S = m * n Time complexity is 2 * T (n / 2) + O(m). Therefore time complexity is O(S). In the base case this algorithm perform O(minLen * n) comparisons, where minLen is the shortest string of the array.
 * - Space complexity; 𝑂(m * log n).
 */

console.log('["flower","flow","flight"] =>', longestCommonPrefix(["flower", "flow", "flight"]));
