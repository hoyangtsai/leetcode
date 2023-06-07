/*
 * @lc app=leetcode id=696 lang=javascript
 *
 * [696] Count Binary Substrings
 */


/**
 * @Nvidia
 * tags: #binary-substring, #string-group-possibility, #alternating-sequence
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let groups = Array(s.length);
  let t = 0;
  groups[0] = 1; // possibility??
  for (let i = 1; i < groups.length; i++) {
    if (s.charAt(i - 1) != s.charAt(i)) {
      t++;
      groups[t] = 1;
    } else {
      groups[t]++;
    }
  }

  let ans = 0;
  for (let i = 1; i <= t; i++) {
    ans += Math.min(groups[i - 1], groups[i]);
  }
  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(N).
 */