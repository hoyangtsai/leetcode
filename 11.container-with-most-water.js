/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

/**
 * com: #amazon, #microsoft, #facebook, #google, #apple
 * tags: #two-pointers, #greedy, #histogram
 * #google-interview
 * {@link trap|./42.trapping-rain-water/two-pointers.js}
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  let l = 0, r = height.length - 1;
  while (l < r) {
    max = Math.max(
      max,
      Math.min(height[l], height[r]) * (r - l) // get the lowest threshold times ranges between two pointers
    );
    if (height[l] < height[r]) { // remain the largest threshold
      l ++;
    } else {
      r --;
    }
  }
  return max;
};
// @lc code=end


/**
 * - Time complexity: O(n). Numbers of the height.
 * - Space complexity: O(1). Constant space is used.
 */
