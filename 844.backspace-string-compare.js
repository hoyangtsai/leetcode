/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

/**
 * tags: #stack, #string-removal, #string-remove-by-symbol
 * #google-interview
 * {@link 2390.removing-stars-from-a-string.js}
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  function build(s) {
    let stack = [];
    for (const c of s.split('')) {
      c === '#' ? stack.pop() : stack.push(c);
    }
    return stack.join('');
  }

  return build(s) === build(t);
};
// @lc code=end


/**
 * - Time complexity: O(M + N), where M, N are the lengths of S and T respectively.
 * - Space complexity: O(M + N).
 */