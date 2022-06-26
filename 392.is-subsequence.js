/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 */

 // #binary-search, #two-pointers, #greedy

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  const sLength = s.length, tLength = t.length;
  let sIndex = 0, tIndex = 0;

  while (sIndex < sLength && tIndex < tLength) {
    if (s.charAt(sIndex) === t.charAt(tIndex)) {
      sIndex += 1;
    }
    tIndex += 1;
  }
  return sIndex === s.length;

  /**
   * Two-pointers approach
   * Time complexity: O(|T|).
   * Space complexity: O(1). In the iteration, a constant memory is consumed regardless of the input.
   */
};
// @lc code=end
