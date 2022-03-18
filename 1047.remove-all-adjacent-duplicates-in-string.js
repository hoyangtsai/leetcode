/*
 * @lc app=leetcode id=1047 lang=javascript
 *
 * [1047] Remove All Adjacent Duplicates In String
 */

/**
 * tags: #stack
 * {@link 1209.remove-all-adjacent-duplicates-in-string-ii.js}
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  let stack = [];
  for (const c of s) {
    if (stack.length > 0 && c == stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.join('');
};
// @lc code=end


/**
 * - Time complexity: O(N), where N is a string length.
 * - Space complexity: O(N - D) where D is a total of length for duplicates.
 */