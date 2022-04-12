/*
 * @lc app=leetcode id=856 lang=javascript
 *
 * [856] Score of Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
  let score = 0, depth = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      depth++;
    } else {
      depth--; 
    }
    if (s[i] == ')' && s[i - 1] == '(') {
      score += Math.pow(2, depth);
    }
  }
  return score;
};
// @lc code=end


/**
 * - Time complexity: O(N)
 * - Space complexity: O(1)
 */