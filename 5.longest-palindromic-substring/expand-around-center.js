/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

/**
 * tags: #palindrome, #anagram
 * {@link 647.palindromic-substrings/expand-around-center.js}
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  function expandAroundCenter(s, lo, hi) {
    while (lo >= 0 && hi < s.length) {
      if (s.charAt(lo) != s.charAt(hi)) break;
      lo--;
      hi++;
    }

    return s.substring(lo + 1, hi);;
  }

  let longest = '';
  for (let i = 0; i < s.length; i++) {
    let subStr1 = expandAroundCenter(s, i, i);
    let subStr2 = expandAroundCenter(s, i, i + 1);
    let longerPalindrome = subStr1.length > subStr2.length ? subStr1 : subStr2;
    if (longerPalindrome.length > longest.length) {
      longest = longerPalindrome;
    }
  }
  return longest;
};
// @lc code=end


/**
 * - Time complexity: O(N^2).
 * - Space complexity: O(1).
 */