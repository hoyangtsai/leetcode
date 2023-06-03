/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const N = nums.length;

  if (N === 1) return nums[0];

  let maxRobbedAmount = Array(N + 1).fill(0);

  // Base case initializations.
  maxRobbedAmount[N] = 0;
  maxRobbedAmount[N - 1] = nums[N - 1];

  // DP table calculations.
  for (let i = N - 2; i >= 0; i--) {
    // Same as the recursive solution.
    maxRobbedAmount[i] = Math.max(maxRobbedAmount[i + 1], maxRobbedAmount[i + 2] + nums[i]);
  }

  return maxRobbedAmount[0];
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(N).
 */