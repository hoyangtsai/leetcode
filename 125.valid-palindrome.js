/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

/**
 * #facebook, #microsoft
 * tags: #two-pinter, #palindrome, #anagram
 * {@link validPalindrome|./680.valid-palindrome-ii.js}
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const str = s.toLowerCase().replace(/[^a-z\d]/g, '');

  let l = 0, r = str.length - 1;
  while (l < r) {
    if (str[l++] !== str[r--]) {
      return false;
    }
  }
  return true;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */