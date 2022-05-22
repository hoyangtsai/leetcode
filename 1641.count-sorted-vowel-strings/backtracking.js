/*
 * @lc app=leetcode id=1641 lang=javascript
 *
 * [1641] Count Sorted Vowel Strings
 */

/**
 * tags: #backtracking
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
  function backtrack(n, vowels) {
    if (n == 0) return 1;

    let result = 0;
    for (let i = vowels; i <= 5; i++) {
      result += backtrack(n - 1, i);
    }
    return result;
  }

  return backtrack(n, 1);
};
// @lc code=end


/**
 * - Time complexity: O(n^5).
 * - Space complexity: O(n).
 */