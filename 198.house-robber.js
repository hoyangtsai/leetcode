/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

/**
 * com: #amazon, #microsoft, #google
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

  let t1 = 0;
  let t2 = 0;
  for (let i = 0; i < N; i++) {
    let temp = t1;
    t1 = Math.max(t2 + nums[i], t1);
    t2 = temp;
  }

  return t1;
};
// @lc code=end


/**
 * Optimized DP
 * 
 * - Time complexity: O(N).
 * - Space complexity: O(1).
 */