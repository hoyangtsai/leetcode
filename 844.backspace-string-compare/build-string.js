/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

/**
 * tags: #build-string, #stack
 * #google-interview
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  function process(s) {
    const res = [];
    for (const x of s.split('')) {
      x === '#' ? res.pop() : res.push(x);
    }
    return res.join('');
  }

  return process(s) == process(t);
};
// @lc code=end


/**
 * - Time complexity: O(M + N), where M, N are the lengths of S and T respectively.
 * - Space complexity: O(M + N).
 */