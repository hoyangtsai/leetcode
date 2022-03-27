/*
 * @lc app=leetcode id=1029 lang=javascript
 *
 * [1029] Two City Scheduling
 */

/**
 * tags: #greedy
 */

// @lc code=start
/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  // sort by difference in costs of a and b 
  // send the first n to a, rest to b 
  // maximum difference first
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]))

  let total = 0;
  let n = parseInt(costs.length / 2);
  // To optimize the company expenses,
  // send the first n persons to the city A
  // and the others to the city B
  for (let i = 0; i < n; i++) {
    total += costs[i][0] + costs[i + n][1];
  }
  return total;
};
// @lc code=end


/**
 * - Time complexity: O(n log n).
 * - Space complexity: O(1).
 */


twoCitySchedCost([[10, 20], [30, 200], [400, 50], [30, 20]])
// after sorting [ [ 30, 200 ], [ 10, 20 ], [ 30, 20 ], [ 400, 50 ] ]
// -170, -10, 10, 350