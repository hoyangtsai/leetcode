/*
 * @lc app=leetcode id=163 lang=javascript
 *
 * [163] Missing Ranges
 */

// @facebook, @google, @amazon
// #array
// #google-interview

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
  let res = [];

  const formatRange = (lower, upper) => {
    if (lower === upper) {
      return String(lower);
    }
    return `${lower}->${upper}`;
  };

  let prev = lower - 1;
  for (let i = 0; i <= nums.length; i++) {
    let curr = (i < nums.length) ? nums[i] : upper + 1;
    if (prev + 1 <= curr - 1) {
      res.push(formatRange(prev + 1, curr - 1));
    }
    prev = curr;
  }

  return res;
};
// @lc code=end

