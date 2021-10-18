/*
 * @lc app=leetcode id=973 lang=javascript
 *
 * [973] K Closest Points to Origin
 */

// @facebook, @amazon, @linkedin
// #math, #geometry, #heap

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  function swap(i, j) {
    [points[i], points[j]] = [points[j], points[i]];
  }

  function distance(point) {
    console.log('distance =>', point);
    return point[0] * point[0] + point[1] * point[1];
  }
};
// @lc code=end

