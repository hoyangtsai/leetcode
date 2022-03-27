/*
 * @lc app=leetcode id=461 lang=javascript
 *
 * [461] Hamming Distance
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  // same bits of 1/0 are 0, others are 1
  // then shift right and count
  let xor = x ^ y;
  let distance = 0;
  while (xor != 0) {
    if (xor % 2 == 1)
      distance += 1;
    xor = xor >> 1;
  }
  return distance;
};
// @lc code=end

