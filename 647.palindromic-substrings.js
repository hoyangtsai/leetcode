/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 */

/**
 * tags: #palindrome, #anagram
 * @link file://./680.valid-palindrome-ii.js
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  function isPalindrome(s, lo, hi) {
    while (lo < hi) {
      if (s.charAt(lo++) != s.charAt(hi--)) {
        return false;
      }
      // lo++;
      // hi--;
    }
    return true;
  }

  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        ans += 1;
      }
    }
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(N^3).
 *   Since we just need to traverse every substring once, the total time taken is sum of the length of all substrings.
 * 
 *   In a string of length N, then there are:
 *   - N substring of size 1 
 *   - N - 1 substring of size 2 
 *   - N - 2 substring of size 3
 *   - ...
 *   - 1 substring of size N (which is the entire string)
 * 
 *   Total time taken to traverse all of these strings is the order of 
 *   1 * (N) + 2 * (N - 1) + 3 * (N - 2) + ... + (N) * 1
 *   = N + 2(N - 1) + 3(N - 2) + ... + N(N - (N - 2)) 
 * 
 * - Space complexity: O(1).
 */