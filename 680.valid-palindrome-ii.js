/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 */

/**
 * #facebook
 * tags: #two-pointers, #palindrome, #anagram
 * {@link isPalindrome|./125.valid-palindrome.js}
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  function isPalindrome(str, i, j) {
    while (i < j) {
      if (str[i++] !== str[j--]) {
        return false;
      }
    }
    return true;
  }

  let l = 0, r = s.length - 1;
  while (l < r) {
     if (s[l] !== s[r]) {
      return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1);
    }
    l++;
    r--;
  }

  return true;
};
// @lc code=end

