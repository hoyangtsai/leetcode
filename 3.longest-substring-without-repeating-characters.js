/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

/**
 * tags: #sliding-window, #two-pointers, #substring
 * #google-interview
 * {@link lengthOfLongestSubstringTwoDistinct|./3.longest-substring-without-repeating-characters.js}
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