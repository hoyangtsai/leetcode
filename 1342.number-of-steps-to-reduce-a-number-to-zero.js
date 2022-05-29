/*
 * @lc app=leetcode id=1342 lang=javascript
 *
 * [1342] Number of Steps to Reduce a Number to Zero
 */

/**
 * tags: #bit-manipulation
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  let steps = 0;

  while (num != 0) {
    if (num & 1) { // odd, like num % 2 == 1
      num ^= 1;
    } else {
      num >>= 1;
    }
    steps++;
  }

  return steps;
};
// @lc code=end


/**
 * - Time complexity: O(log n).
 * - Space complexity: O(1).
 */