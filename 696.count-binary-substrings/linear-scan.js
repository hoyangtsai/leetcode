/*
 * @lc app=leetcode id=696 lang=javascript
 *
 * [696] Count Binary Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let curr = 1, prev = 0, ans = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] !== s[i]) {
      ans += Math.min(curr, prev)
      prev = curr;
      curr = 1;
    } else {
      curr++;
    }
  }
  return ans + Math.min(curr, prev);
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */