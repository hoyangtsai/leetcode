/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

/**
 * tags: #hash-table, #sliding-window, #two-pointers
 * #google-interview
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let r = 0, l = 0;
  let max = 0;
  let str = '';

  while (r < s.length) {
    if (str.indexOf(s[r]) < 0) {
      str += s[r];
      max = Math.max(max, r - l + 1);
      r++;
    } else {
      str = str.substring(1);
      l++;
    }
  }

  return max;
};
// @lc code=end


/**
 * - Space complexity: O(n).
 * - Time complexity: O(1).
 */