/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

/**
 * #two-pointers
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */