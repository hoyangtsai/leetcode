/*
 * @lc app=leetcode id=523 lang=javascript
 *
 * [523] Continuous Subarray Sum
 */

/**
 * tags: #prefix-sum, #hash-table, #math
 * {@link 560.subarray-sum-equals-k.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  let sum = 0;
  const map = new Map();
  map.set(0, -1);
  
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (k !== 0) sum %= k;

    if (map.has(sum)) {
      if (i - map.get(sum) > 1) {
        return true;
      }
    } else {
      map.set(sum, i);
    }
  }

  return false;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */

console.log(checkSubarraySum([5, 0, 0, 0], 3)); // true