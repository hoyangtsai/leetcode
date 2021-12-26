/*
 * @lc app=leetcode id=161 lang=javascript
 *
 * [161] One Edit Distance
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
  let ns = s.length;
  let nt = t.length;

  // Ensure that s is shorter than t.
  if (ns > nt) return isOneEditDistance(t, s);

  // The strings are NOT one edit away distance  
  // if the length diff is more than 1.
  if (nt - ns > 1) return false;

  for (let i = 0; i < ns; i++)
    if (s.charAt(i) != t.charAt(i)) {
      // if strings have the same length
      if (ns == nt)
        return s.substring(i + 1) === (t.substring(i + 1));
      // if strings have different lengths
      else
        return s.substring(i) === (t.substring(i + 1));
    }

  // If there is no diffs on ns distance
  // the strings are one edit away only if
  // t has one more character. 
  return (ns + 1 == nt);
};
// @lc code=end


/**
 * - Time complexity: O(N) in the worst case when string lengths are close enough `abs(ns - nt) <= 1`, where `N` is a number of characters in the longest string. O(1) in the best case when `abs(ns - nt) > 1`.
 * - Space complexity: O(N).
 */