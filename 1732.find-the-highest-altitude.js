/*
 * @lc app=leetcode id=1732 lang=javascript
 *
 * [1732] Find the Highest Altitude
 */

/**
 * tags: #prefix-sum
 */

// @lc code=start
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  let currentAltitude = 0;
  let highestPoint = currentAltitude;

  for (const altitudeGain of gain) {
    currentAltitude += altitudeGain;
    highestPoint = Math.max(highestPoint, currentAltitude);
  }

  return highestPoint;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(1).
 */