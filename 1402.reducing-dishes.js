/*
 * @lc app=leetcode id=1402 lang=javascript
 *
 * [1402] Reducing Dishes
 */

// @lc code=start
/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
  satisfaction.sort((a, b) => a - b);

  let maxSatisfaction = 0;
  let suffixSum = 0;
  for (let i = satisfaction.length - 1; i >= 0 && suffixSum + satisfaction[i] > 0; i--) {
    // Total satisfaction with all dishes so far.
    suffixSum += satisfaction[i];
    // Adding one instance of previous dishes as we add one more dish on the left.
    maxSatisfaction +=  suffixSum;
  }

  return maxSatisfaction;
};
// @lc code=end


/**
 * - Time complexity: O(N logN).
 * - Space complexity: O(logN).
 *   No extra space is needed apart from two variables.
 *   But some space is required for sorting. 
 */
