/*
 * @lc app=leetcode id=830 lang=javascript
 *
 * [830] Positions of Large Groups
 */

/**
 * tags: #two-pointers
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
  let ans = [];
  for (let i = 0, j = 0; i < s.length; i = j) {
    while (j < s.length && s.charAt(i) == s.charAt(j)) j++;
    if (j - i >= 3) {
      ans.push([i, j - 1]);
    }
  }
  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */