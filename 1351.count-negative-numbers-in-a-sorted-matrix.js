/*
 * @lc app=leetcode id=1351 lang=javascript
 *
 * [1351] Count Negative Numbers in a Sorted Matrix
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  let count = 0;
  let n = grid[0].length;

  // finding each row the first negative number's index
  for (const row of grid) {
    let l = 0, r = n - 1;
    while (l <= r) {
      let m = ~~((l + r) / 2);
      if (row[m] < 0) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
    count += n - l;
  }

  return count;
};
// @lc code=end

