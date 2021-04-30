/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// #string, #dynamic-programming
// @amazon, @bloomberg, @microsoft

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let longest = '';

  function expandAroundCenter(str, i, j) {
    while (i >= 0 && j < s.length && s[i] === s[j]) {
      i--;
      j++;
    }
    return str.slice(i + 1, j);;
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
