/*
 * @lc app=leetcode id=1332 lang=javascript
 *
 * [1332] Remove Palindromic Subsequences
 */

/**
 * tags: #two-pointers, #palindrome, #anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
  function isPalindrome(s) {
    let lo = 0, hi = s.length - 1;
    while (lo < hi) {
      if (s.charAt(lo) != s.charAt(hi)) return false;
      lo ++;
      hi --;
    }
    return true;
  }

  if (isPalindrome(s)) return 1;
  
  return 2;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */