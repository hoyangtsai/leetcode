/*
 * @lc app=leetcode id=2011 lang=javascript
 *
 * [2011] Final Value of Variable After Performing Operations
 */

// @lc code=start
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
  let res = 0

  for (const op of operations) {
    if (op.startsWith('+') || op.endsWith('+')) {
      res += 1
    } else if (op.startsWith('-') || op.endsWith('-')) {
      res -= 1
    }
  }
  
  return res;
};
// @lc code=end

