/*
 * @lc app=leetcode id=85 lang=javascript
 *
 * [85] Maximal Rectangle
 */

// @amazon, @google
// #stack, #dynamic-programming

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  // Get the maximum area in a histogram given its heights
  function leetcode84(heights) {
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
  }

  if (matrix.length == 0) return 0;
  let maxarea = 0;
  let dp = new Array(matrix[0].length).fill(0);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      // update the state of this row's histogram using the last row's histogram
      // by keeping track of the number of consecutive ones
      dp[j] = matrix[i][j] == '1' ? dp[j] + 1 : 0;
    }
    // update maxarea with the maximum area from this row's histogram
    maxarea = Math.max(maxarea, leetcode84(dp));
  } 
  
  return maxarea;
};
// @lc code=end


/**
 * - Time complexity: O(N * M).
 * - Space complexity: O(M).
 */
