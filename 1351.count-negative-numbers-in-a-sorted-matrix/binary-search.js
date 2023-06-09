/*
 * @lc app=leetcode id=1351 lang=javascript
 *
 * [1351] Count Negative Numbers in a Sorted Matrix
 */

/**
 * tags: #binary-search, #matrix-finding-numbers
 * {@link 74.search-a-2-d-matrix/binary-search.js}
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
      if (row[m] >= 0) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
    count += n - l;
  }

  return count;
};
// @lc code=end


/**
 * - Time complexity: O(m log n).
 * - Space complexity: O(1).
 */

/**
 * [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
 * 
 * [4,3,2,-1]
 * [3,2,1,-1]
 * [1,1,-1,-2]
 * [-1,-1,-2,-3]
 */

// countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])
// countNegatives([[5,1,0],[-5,-5,-5]])
countNegatives([[3,-1,-3,-3,-3],[2,-2,-3,-3,-3],[1,-2,-3,-3,-3],[0,-3,-3,-3,-3]])

/**
 * [3,-1,-3,-3,-3]
 * [2,-2,-3,-3,-3]
 * [1,-2,-3,-3,-3]
 * [0,-3,-3,-3,-3]
 */