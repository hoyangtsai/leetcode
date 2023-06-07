/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */

/**
 * tags: #binary-search, #square-grid, #square-matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  function binarySearch(matrix, target, start, isVertical) {
    let lo = start;
    // if is vertical, loop the column else loop row
    let hi = isVertical ? matrix[0].length - 1 : matrix.length - 1;

    while (lo <= hi) {
      let mid = parseInt((lo + hi) / 2);
      if (isVertical) { // search a column
        if (matrix[start][mid] < target) {
          lo = mid + 1;
        } else if (matrix[start][mid] > target) {
          hi = mid - 1;
        } else {
          return true;
        }
      } else { // searching a row
        if (matrix[mid][start] < target) {
          lo = mid + 1;
        } else if (matrix[mid][start] > target) {
          hi = mid - 1;
        } else {
          return true;
        }
      }
    }

    return false;
  }

  // iterate over matrix diagonals
  let shorterDim = Math.min(matrix.length, matrix[0].length);
  for (let i = 0; i < shorterDim; i++) {
    const verticalFound = binarySearch(matrix, target, i, true);
    const horizontalFound = binarySearch(matrix, target, i, false);
    if (verticalFound || horizontalFound) {
      return true;
    }
  }

  return false;
};
// @lc code=end


/**
 * - Time complexity: O(log(n!)).
 * - Space complexity: O(1).
 */