/*
 * @lc app=leetcode id=740 lang=javascript
 *
 * [740] Delete and Earn
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  let dp = Array(nums.length).fill(0);

  let points = new Map();
  let maxNumber = 0;
  for (const n of nums) {
    points.set(n, (points.get(n) || 0) + n);
    maxNumber = Math.max(maxNumber, n);
  }

  let cache = new Map();

  function maxPoints(num) {
    // Check for base cases
    if (num === 0) return 0;

    if (num === 1) {
      return points.get(1) || 0;
    }

    if (cache.has(num)) {
      return cache.get(num);
    }

    // Apply recurrence relation
    let gain = points.get(num) || 0;
    cache.set(num, Math.max(maxPoints(num - 1), maxPoints(num - 2) + gain));
    return cache.get(num);
  }

  return maxPoints(maxNumber);
};
// @lc code=end


console.log(deleteAndEarn([2,2,3,3,3,4]))