/*
 * @lc app=leetcode id=1446 lang=javascript
 *
 * [1446] Consecutive Characters
 */

/**
 * tags: #consecutive-string
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  let count = 0;
  let maxCount = 0;
  let prevChar = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] == prevChar) {
      count++;
    } else {
      count = 1;
      prevChar = s[i];
    }
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
};
// @lc code=end


/**
 * - Time complexity: O(N)
 * - Space complexity: O(1)
 */