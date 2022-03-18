/*
 * @lc app=leetcode id=1209 lang=javascript
 *
 * [1209] Remove All Adjacent Duplicates in String II
 */

/**
 * tags: #stack
 * {@link 1047.remove-all-adjacent-duplicates-in-string.js}
 */

/**
 * 
 * @returns 
 */
// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
  let stack = [];
  for (const char of s) {
    if (stack.length > 0 && stack[stack.length - 1][0] == char) {
      stack[stack.length - 1][1] += 1;
      if (stack[stack.length - 1][1] === k) {
        stack.pop();
      } 
    } else {
      stack.push([char, 1]);
    }
  }
  
  let ans = '';
  for (const [char, count] of stack) {
    ans += char.repeat(count);
  }
  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n), where n is a string length.
 * - Space complexity: O(n) for the stack.
 */