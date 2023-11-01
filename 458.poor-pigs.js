/*
 * @lc app=leetcode id=458 lang=javascript
 *
 * [458] Poor Pigs
 */

/**
 * tags: #math
 */

// @lc code=start
/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
  let states = parseInt(minutesToTest / minutesToDie) + 1;
  return parseInt(Math.ceil(Math.log(buckets) / Math.log(states) - 1e-10));
};
// @lc code=end


/**
 * - Time complexity: O(1)
 * - Space complexity: O(1)
 */