/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */

/**
 * tags: #regex, #recursion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (p.length === 0) return s === '';

  let firstMatch = (s.length > 0 &&
    (p.charAt(0) == s.charAt(0) || p.charAt(0) == '.'));

  if (p.length >= 2 && p.charAt(1) == '*') {
    return (isMatch(s, p.substring(2)) ||
      (firstMatch && isMatch(s.substring(1), p)));
  } else {
    return firstMatch && isMatch(s.substring(1), p.substring(1));
  }
};
// @lc code=end


/**
 * - Time complexity: Let T, P be the length of text and the pattern respectively.
 *   In the worst case, a call to match(text[i:], pattern[2j:]) will be made (i + j / i) times, and strings of the order O(T - i) and O(P - 2 * j) will be made.
 *   This is bounded by O((T + P)2^T + P / 2).
 * 
 * - Space complexity: If memory is not freed, this will also take a total of ((T + P)2^T + P / 2) space, even through there are only order O(T^2 + P^2) unique suffixes of P and T that are actually required.
 */