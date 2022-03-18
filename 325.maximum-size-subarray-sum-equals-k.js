/*
 * @lc app=leetcode id=325 lang=javascript
 *
 * [325] Maximum Size Subarray Sum Equals k
 */

/**
 * tags: #prefix-sum, #hash-table
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
  let prefixSum = 0;
  let longest = 0;
  let indices = new Map();
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    if (prefixSum == k) {
      longest = i + 1;
    }
    
    if (indices.has(prefixSum - k)) {
      longest = Math.max(longest, i - indices.get(prefixSum - k));
    }

    if (!indices.has(prefixSum)) {
      indices.set(prefixSum, i);
    }
  }

  return longest;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(N).
 */