/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

/**
 * @Nvidia
 * tags: #binary-search, #matrix-find-number
 * {@link 240.search-a-2-d-matrix-ii/binary-search.js}
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  // flatten the matrix
  const nums = matrix.reduce((acc, cur) => acc.concat(cur), []);

  let l = 0, r = nums.length - 1;

  while (l <= r) {
    let mid = parseInt((l + r) / 2);

    if (nums[mid] === target) {
      return true;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return false;
};
// @lc code=end


/**
 * - Time complexity: O(log (m * n))
 * - Space complexity: O(1)
 */