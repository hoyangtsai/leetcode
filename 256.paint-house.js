/*
 * @lc app=leetcode id=256 lang=javascript
 *
 * [256] Paint House
 */

/**
 * tags: #dynamic-programming
 * {@link 265.paint-house-ii.js}
 */

// @lc code=start
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
  let previousRow = costs[0];

  for (let i = 1; i < costs.length; i++) {
    let currentRow = costs[i];

    currentRow[0] += Math.min(previousRow[1], previousRow[2]);
    currentRow[1] += Math.min(previousRow[0], previousRow[2]);
    currentRow[2] += Math.min(previousRow[0], previousRow[1]);

    previousRow = currentRow;
  }

  return Math.min(previousRow[0], previousRow[1], previousRow[2]);
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(1).
 *   We're "remembering" up to 6 calculations at a time (using 2 x length-3 arrays).
 *   Because this is actually a constant, the space complexity is still O(1).
 */