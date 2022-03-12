/*
 * @lc app=leetcode id=1822 lang=javascript
 *
 * [1822] Sign of the Product of an Array
 */

/**
 * tags: #math
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
  let sign = 1;
  for (const n of nums) {
    if (n === 0) return 0;
    if (n < 0) {
      sign = -sign;
    }
  }
  return sign;
};
// @lc code=end

