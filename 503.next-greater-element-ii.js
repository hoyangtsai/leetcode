/*
 * @lc app=leetcode id=503 lang=javascript
 *
 * [503] Next Greater Element II
 */

/**
 * tags: #stack, #monotonic-stack
 * {@link 1475.final-prices-with-a-special-discount-in-a-shop.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const n = nums.length;
  let stack = [];
  let res = Array(n).fill(-1);

  // double the array length
  for (let i = 0, j = 0; i < n * 2; i++) {
    while (stack.length > 0 && nums[i % n] > nums[stack[stack.length - 1]]) {
      res[stack.pop()] = nums[i % n];
    }
    stack.push(i % n);
  }

  return res;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */