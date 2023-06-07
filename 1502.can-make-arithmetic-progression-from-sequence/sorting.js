/*
 * @lc app=leetcode id=1502 lang=javascript
 *
 * [1502] Can Make Arithmetic Progression From Sequence
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
  arr.sort((a, b) => a - b);

  let diff = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] != diff) return false;
  }
  
  return true;
};
// @lc code=end


/**
 * - Time complexity: O(n log n).
 * - Space complexity: O(n).
 *   - Some extra space is used when we sort arr in place.
 *     The space complexity of the sorting algorithm depends on the programming language.
 *     
 *     In javascript, v8 engine implementation Quicksort is used by default which has a space complexity of O(log n).
 *     https://blog.shovonhasan.com/time-space-complexity-of-array-sort-in-v8/
 */