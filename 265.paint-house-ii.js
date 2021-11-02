/*
 * @lc app=leetcode id=265 lang=javascript
 *
 * [265] Paint House II
 */

// @lc code=start
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function(costs) {
  const n = costs.length;
  const k = costs[0].length;

  for (let i = 1; i < n; i++) {
    // Find the minimum and second minimum color in the row.
    let minColor = -1, secondMinColor = -1;

    for (let color = 0; color < k; color++) {
      let cost = costs[i - 1][color];

      if (minColor == -1 || cost < costs[i - 1][minColor]) {
        secondMinColor = minColor;
        minColor = color;
      } else if (secondMinColor == -1 || cost < costs[i - 1][secondMinColor]) {
        secondMinColor = color;
      }
    }

    // And now calculate the new costs for the current row.
    for (let color = 0; color < k; color++) {
      if (color == minColor) {
        costs[i][color] += costs[i - 1][secondMinColor];
      } else {
        costs[i][color] += costs[i - 1][minColor];
      }
    }
  }

  // Find the minimum in the last row.
  let min = Number.MAX_VALUE;
  for (const c of costs[n - 1]) {
    min = Math.min(min, c);
  }

  return min;
};
// @lc code=end


/**
 * - Time complexity: O(n * k).
 * - Space complexity: O(1).
 */