/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
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
      (height[left] >= leftMax) ? 
        leftMax = height[left] : ans += (leftMax - height[left]);
      left ++;
    } else {
      (height[right] >= rightMax) ?
        rightMax = height[right] : ans += (rightMax - height[right]);
      right --;
    }
  }
  return ans;
};
// @lc code=end

