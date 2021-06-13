/*
 * @lc app=leetcode id=266 lang=javascript
 *
 * [266] Palindrome Permutation
 */

// #hash-table, #palindromic, #anagram
// @bloomberg, @google, @uber, @facebook, @microsoft

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  let dict = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in dict) {
      delete dict[s[i]];
    } else {
      dict[s[i]] = true;
    }
  }

  return Object.keys(dict).length <= 1;
};
// @lc code=end

