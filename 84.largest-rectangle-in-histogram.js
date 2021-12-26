/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 */

/**
 * com: #amazon, #microsoft, #google
 * tags: #stack, #histogram
 * {@link maximalRectangle|./85.maximal-rectangle.js}
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let stack = [-1];
  let maxArea = 0;
  const length = heights.length;
  for (let i = 0; i < length; i++) {
    while ((stack[stack.length - 1] != -1) && 
      (heights[stack[stack.length - 1]] >= heights[i])) {
      let currentHeight = heights[stack.pop()];
      let currentWidth = i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, currentHeight * currentWidth);
    }
    stack.push(i);
  }
  while (stack[stack.length - 1] != -1) {
    let currentHeight = heights[stack.pop()];
    let currentWidth = length - stack[stack.length - 1] - 1;
    maxArea = Math.max(maxArea, currentHeight * currentWidth);
  }
  return maxArea;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */