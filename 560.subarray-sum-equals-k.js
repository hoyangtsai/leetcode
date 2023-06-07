/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */

/**
 * @Shopback, @Nvidia
 * tags: #hash-table, #prefix-sum, #number-pair
 * #my-interview
 * {@link 523.continuous-subarray-sum.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let count = 0, sum = 0;
  let map = new Map();
  map.set(0, 1); // means when sum - k = 0 meet the condition

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */