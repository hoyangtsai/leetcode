/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

/**
 * tags: #binary-search, #matrix-finding-number
 * {@link 240.search-a-2-d-matrix-ii/binary-search.js}
 * {@link 1351.count-negative-numbers-in-a-sorted-matrix/binary-search.js}
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const n = matrix[0].length;

  for (const row of matrix) {
    let l = 0, r = n - 1;
    
    if (row[r] < target) continue;

    while (l <= r) {
      let mid = parseInt((l + r) / 2);
  
      if (row[mid] === target) {
        return true;
      } else if (row[mid] < target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }  
  }

  return false;
};
// @lc code=end


/**
 * - Time complexity: O(m log n)
 * - Space complexity: O(1)
 */