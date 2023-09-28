/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
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
var isSubsequence = function(s, t) {
  let sLength = s.length, tLength = t.length;
  let sIndex = 0, tIndex = 0;

  while (sIndex < sLength && tIndex < tLength) {
    if (s.charAt(sIndex) == t.charAt(tIndex)) {
      sIndex++;
    }
    tIndex++;
  }

  return sIndex == sLength;
};
// @lc code=end


/**
 * - Time complexity: O(|T|)
 * - Space complexity: O(1). In the iteration, a constant memory is consumed regardless of the input.
 */
