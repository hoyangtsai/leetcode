/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 */

/**
 * tags: #palindromic, #anagram
 * {@link longestPalindrome|./5.longest-palindromic-substring/expand-around-center.js}
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    // odd-length palindromes, single character center
    ans += countPalindromesAroundCenter(s, i, i);

    // even-length palindromes, consecutive characters center
    ans += countPalindromesAroundCenter(s, i, i + 1);
  }

  function countPalindromesAroundCenter(s, lo, hi) {
    let ans = 0;

    while (lo >= 0 && hi < s.length) {
      if (s.charAt(lo--) != s.charAt(hi++)) break;
      
      ans++;
    }

    return ans;
  }

  return ans;
};
// @lc code=end