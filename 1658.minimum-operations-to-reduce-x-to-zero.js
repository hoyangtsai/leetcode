/*
 * @lc app=leetcode id=1658 lang=javascript
 *
 * [1658] Minimum Operations to Reduce X to Zero
 */

/**
 * tags: #prefix-sum, #two-pointer
 * {@link 325.maximum-size-subarray-sum-equals-k.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
  let current = nums.reduce((prev, curr) => prev + curr, 0);

  const n = nums.length;
  let mini = Number.MAX_VALUE;

  for (let left = 0, right = 0; right < n; right++) {
    current -= nums[right];

    while (current < x && left <= right) {
      current += nums[left];
      left++;
    }

    if (current == x) {
      mini = Math.min(mini, (n - 1 - right) + left);
    }
  }

  return mini != Number.MAX_VALUE ? mini : -1;
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(1)
 */