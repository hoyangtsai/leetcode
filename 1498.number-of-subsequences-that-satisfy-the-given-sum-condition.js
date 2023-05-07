/*
 * @lc app=leetcode id=1498 lang=javascript
 *
 * [1498] Number of Subsequences That Satisfy the Given Sum Condition
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
  const n = nums.length;
  const mod = 10 ** 9 + 7;

  nums.sort((a, b) => a - b);
  
  // Pre-compute the value of 2 to the power of each value.
  let power = Array(n);
  power[0] = 1;
  for (let i = 1; i < n; ++i) {
    power[i] = (power[i - 1] * 2) % mod;
  }

  let answer = 0;
  let left = 0, right = n - 1;

  while (left <= right) {
      if (nums[left] + nums[right] <= target) {
          answer += power[right - left];
          answer %= mod;
          left++;
      } else {
          right--;
      }
  }
  
  return answer;
};
// @lc code=end


/**
 * - Time complexity: O(n log n).
 * - Space complexity: O(n).
 */