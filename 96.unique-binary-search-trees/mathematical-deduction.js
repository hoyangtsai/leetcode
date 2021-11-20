/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let C = 1;
  for (let i = 0; i < n; ++i) {
    C = C * 2 * (2 * i + 1) / (i + 2);
  }
  return C;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(1).
 */