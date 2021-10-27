/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// #two-pointers, #palindromic, #anagram
// @amazon, @bloomberg, @microsoft

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let longest = '';

  function expandAroundCenter(str, r, l) {
    while (r >= 0 && l < s.length && s[l] === s[r]) {
      r--;
      l++;
    }
    return str.substring(r + 1, l);;
  }

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
