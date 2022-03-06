/*
 * @lc app=leetcode id=266 lang=javascript
 *
 * [266] Palindrome Permutation
 */

/**
 * tags: #hash-table, #palindrome, #anagram, #permutation
 * {@link longestPalindrome|./409.longest-palindrome.js}
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  // s consists of only lowercase English letters
  let map = Array(26).fill(0);
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    map[s.charCodeAt(i) - 'a'.charCodeAt()]++;
    if (map[s.charCodeAt(i) - 'a'.charCodeAt()] % 2 == 0) {
      count--;
    } else {
      count++;
    }
  }
  return count <= 1;
};
// @lc code=end


/**
 * - Time complexity: O(n). 
 * - Space complexity: O(1).
 */