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
  let left = 0, right = height.length - 1;
  let ans = 0;
  let leftMax = 0, rightMax = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        ans += (leftMax - height[left]);
      }
      left ++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right]
      } else {
        ans += (rightMax - height[right]);
      }
      right --;
    }
  }
  return ans;
};
// @lc code=end

/**
 * Two pointer
 * 
 * - Time complexity: O(n).
 * - Sapce complexity: O(1).
 */