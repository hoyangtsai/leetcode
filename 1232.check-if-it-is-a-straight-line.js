/*
 * @lc app=leetcode id=1232 lang=javascript
 *
 * [1232] Check If It Is a Straight Line
 */

/**
 * tags: #geometry
 */

// @lc code=start
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  // Returns the delta Y
  function getYDiff(a, b) {
    return a[1] - b[1];
  }

  // Returns the delta X
  function getXDiff(a, b) {
    return a[0] - b[0];
  }

  let deltaX = getXDiff(coordinates[1], coordinates[0]);
  let deltaY = getYDiff(coordinates[1], coordinates[0]);

  for (let i = 2; i < coordinates.length; i++) {
    // Check if the slope between points 0 and i, is the same as between 0 and 1
    if (deltaY * getXDiff(coordinates[i], coordinates[0])
      != deltaX * getYDiff(coordinates[i], coordinates[0])) {
      return false;
    }
  }

  return true;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(1).
 */