/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

/**
 * tags: #two-pointers
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let i = s.length - 1, j = t.length - 1;
  let skipS = 0, skipT = 0;

  while (i >= 0 || j >= 0) { // While there may be chars in build(S) or build (T)
    while (i >= 0) { // Find position of next possible char in build(S)
      if (s.charAt(i) == '#') { skipS++; i--; }
      else if (skipS > 0) { skipS--; i--; }
      else break;
    }
    while (j >= 0) { // Find position of next possible char in build(T)
      if (t.charAt(j) == '#') { skipT++; j--; }
      else if (skipT > 0) { skipT--; j--; }
      else break;
    }

    // If two actual characters are different
    if (i >= 0 && j >= 0 && s.charAt(i) != t.charAt(j))
      return false;
    // If expecting to compare char vs nothing
    if ((i >= 0) != (j >= 0))
      return false;
    i--; j--;
  }

  return true;
};
// @lc code=end


/**
 * - Time complexity: O(M + N), where M, N are the lengths of S and T respectively.
 * - Space complexity: O(1).
 */