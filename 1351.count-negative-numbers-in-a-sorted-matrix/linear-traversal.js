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
  let currRowNegativeIndex = n - 1;

  for (const row of grid) {
    // Decrease 'currRowNegativeIndex' so that it points to current row's last positive element.
    while (currRowNegativeIndex >= 0 && row[currRowNegativeIndex] < 0) {
      currRowNegativeIndex--;
    }
    // 'currRowNegativeIndex' points to the last positive element,
    // which means 'n - (currRowNegativeIndex + 1)' is the number of all negative elements.
    count += (n - (currRowNegativeIndex + 1));
  }
  return count;
};
// @lc code=end


/**
 * - Time complexity: O(m + n).
 * - Space complexity: O(1).
 */
