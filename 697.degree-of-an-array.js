/*
 * @lc app=leetcode id=697 lang=javascript
 *
 * [697] Degree of an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let left = new Map(), right = new Map(), count = new Map();

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    if (left.get(x) == null) left.set(x, i); // only store first occur
    right.set(x, i); // only store the last occur
    count.set(x, (count.get(x) || 0) + 1);
  }

  const degree = Math.max(...count.values());
  let ans = nums.length;
  for (const x of count.keys()) {
    if (count.get(x) == degree) {
      ans = Math.min(ans, right.get(x) - left.get(x) + 1);
    }
  }
  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(N).
 */