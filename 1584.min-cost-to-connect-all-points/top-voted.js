/*
 * @lc app=leetcode id=1584 lang=javascript
 *
 * [1584] Min Cost to Connect All Points
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
  const n = points.length;

  let mstCost = 0;
  let next = 0;

  let minDist = Array(n).fill(Infinity);
  minDist[0] = 0;

  for (let step = 1; step < n; step++) {
    let min = Infinity;
    let point = -1;

    // Pick least weight node which is not in MST
    for (let i = 1; i < n; i++) {
      if (minDist[i] > 0) {
        minDist[i] = Math.min(
          minDist[i],
          Math.abs(points[i][0] - points[next][0]) + Math.abs(points[i][1] - points[next][1])
        );
      
        if (minDist[i] < min) {
          min = minDist[i];
          point = i;
        }
      }
    }

    mstCost += min;
    minDist[point] = 0;
    next = point;
  }

  return mstCost;
};
// @lc code=end


/**
 * - Time complexity: O(N^2).
 * - Space complexity: O(N).
 */