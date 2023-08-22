/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (k === 1) return nums;

  const n = nums.length;

  let left = Array(n);
  left[0] = nums[0];
  let right = Array(n);
  right[n - 1] = nums[n - 1];

  for (let i = 1; i < n; i++) {
    // from left to right
    if (i % k == 0) left[i] = nums[i];  // block_start
    else left[i] = Math.max(left[i - 1], nums[i]);

    // from right to left
    let j = n - i - 1;
    if ((j + 1) % k == 0) right[j] = nums[j];  // block_end
    else right[j] = Math.max(right[j + 1], nums[j]);
  }

  let output = Array(n - k + 1);
  for (let i = 0; i < n - k + 1; i++) {
    output[i] = Math.max(left[i + k - 1], right[i]);
  }
  
  return output;
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 */