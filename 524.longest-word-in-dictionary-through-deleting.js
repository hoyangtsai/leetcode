/*
 * @lc app=leetcode id=524 lang=javascript
 *
 * [524] Longest Word in Dictionary through Deleting
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
  function isSubsequence(x, y) {
    let j = 0;
    for (let i = 0; i < y.length && j < x.length; i++) {
      if (x.charAt(j) == y.charAt(i)) j++;
    }
    return j == x.length;
  }

  let maxStr = '';
  for (const str of dictionary) {
    if (isSubsequence(str, s)) {
      if (str.length > maxStr.length ||
          (str.length == maxStr.length &&
            // str lexicographical order comes before maxStr
            str.localeCompare(maxStr) < 0)
        ) {
          maxStr = str;
        }
    }
  }

  return maxStr;
};
// @lc code=end


/**
 * - Time complexity: O(n * x).
 * - Space complexity: O(x).
 */

console.log(findLongestWord("abce", ["abe","abc"])) // return 'abc'
