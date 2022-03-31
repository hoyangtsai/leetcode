/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

/**
 * #facebook, #amazon, #SmartNews
 * tags: #two-pointers
 * #google-interview
 * {@link 11.container-with-most-water.js}
 */

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
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right]
      } else {
        ans += (rightMax - height[right]);
      }
      right--;
    }
  }
  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */