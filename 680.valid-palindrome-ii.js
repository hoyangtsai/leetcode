/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 */

/**
 * @facebook
 * tags: #two-pointers, #palindrome, #anagram
 * {@link 125.valid-palindrome.js}
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


/**
 * - Time complexity: O(N).
 *   The main while loop we can iterate up to N/2 times, since each iteration represents a pair of characters.
 *   On any given iteration, we may find a mismatch and call `isPalindrome` twice. `isPalindrome` can also iterate up to N/2 times, in the worst case where the first and last character of s do not match.
 *   Because we are only allowed up to one deletion, the algorithm only considers one mismatch. The means that `isPalindrome` will never be called more than twice.
 * 
 * - Space complexity: O(1).
 *   The only extra space is used by two pointers i and j, which can be considered constant relative to the input size.
 */