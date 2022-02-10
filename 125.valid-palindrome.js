/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

/**
 * tags: #two-pinter, #palindrome, #anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.toLowerCase().replace(/[^a-z\d]/g, '');

    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
      if (str[i] !== str[j]) {
        return false;
      }
    }
    return true;
};
// @lc code=end
