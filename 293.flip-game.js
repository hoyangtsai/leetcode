/*
 * @lc app=leetcode id=293 lang=javascript
 *
 * [293] Flip Game
 */

/**
 * tags: #substring-concat, #string-combination
 */

// @lc code=start
/**
 * @param {string} currentState
 * @return {string[]}
 */
var generatePossibleNextMoves = function(currentState) {
  let ans = [];
  let i = -1;
  while ((i = currentState.indexOf("++", i + 1)) >= 0) {
    ans.push(currentState.substring(0, i) + "--" + currentState.substring(i + 2));
  }
  return ans;
};
// @lc code=end

