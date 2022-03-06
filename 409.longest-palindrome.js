/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

/**
 * tags: #palindrome, #hash-table, #permutation
 * {@link canPermutePalindrome|./266.palindrome-permutation.js}
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let map = {};
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      delete map[s[i]];
      count += 2;
    } else {
      map[s[i]] = true;
    }
  }

  if (count % 2 === 0 && Object.keys(map).length > 0) {
    count += 1;
  }

  return count;
};
// @lc code=end

