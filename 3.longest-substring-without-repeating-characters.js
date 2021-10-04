/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @amazon, @microsoft, @bloomberg, @facebook, @adobe, @apple, @google, @uber, @yandex
// #hash-table, #sliding-window, #string, #two-pointers
// #google-interview

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let arr = [];
  let r = 0, l = 0;
  let max = 0;

  while (r < s.length && l < s.length) {
    if (arr.indexOf(s[r]) < 0) {
      arr.push(s[r]);
      max = Math.max(max, r - l + 1);
      r += 1;
    } else {
      arr.splice(arr.indexOf(s[l]), 1);
      l += 1;
    }
  }

  return max;
};
// @lc code=end
