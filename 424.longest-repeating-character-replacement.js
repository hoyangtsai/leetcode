/*
 * @lc app=leetcode id=424 lang=javascript
 *
 * [424] Longest Repeating Character Replacement
 */

/**
 * tags: #hash-table, #sliding-window, #alphabet-table
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let count = Array(26).fill(0);
  let maxCount = 0, start = 0;
  for (let end = 0; end < s.length; end++) {
    maxCount = Math.max(maxCount, ++count[s.charCodeAt(end) - 'A'.charCodeAt()]);
    if (maxCount + k < end - start + 1) {
      count[s.charCodeAt(start) - 'A'.charCodeAt()]--;
      start++;
    }
  }
  return s.length - start;
};
// @lc code=end

