/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */

/**
 * tags: #two-pointers, #bidirectional
 * {@link 20.valid-parentheses.js}
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let left = 0, right = 0;
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == '(') {
      left++;
    } else {
      right++;
    }
    if (left == right) {
      maxLength = Math.max(maxLength, 2 * right);
    } else if (right >= left) {
      left = right = 0;
    }
  }

  left = right = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) == '(') {
      left++;
    } else {
      right++;
    }
    if (left == right) {
      maxLength = Math.max(maxLength, 2 * left);
    } else if (left >= right) {
      left = right = 0;
    }
  }

  return maxLength;
};
// @lc code=end


/**
 * - Time complexity: O(n). Two traversals of the string.
 * - Space complexity: O(1). Only two extra variables left and right are needed.
 */