/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @goldmanSachs, @amazon, @facebook, @google, @microsoft, @adobe, @bloomberg
// #array, #two-pointers, #stack
// #google-interview
// &11

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (height.length < 2) {
    return 0;
  }

  let ans = 0;
  let leftMax = [], rightMax = [];
  const W = height.length;

  leftMax[0] = height[0];
  for (let i = 1; i < W; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1]);
  }

  rightMax[W - 1] = height[W - 1];
  for (let i = W - 2; i >= 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1]);
  }

  for (let i = 1; i < W - 1; i++) {
    ans += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return ans;
};
// @lc code=end

/**
 * Dynamic programming
 * Time complexity: O(n).
 * Sapce complexity: O(n).
 */