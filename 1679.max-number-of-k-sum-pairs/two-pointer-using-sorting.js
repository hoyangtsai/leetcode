/*
 * @lc app=leetcode id=1679 lang=javascript
 *
 * [1679] Max Number of K-Sum Pairs
 */

/**
 * tags: #two-pointer
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
  nums.sort((a, b) => a - b);

  let l = 0, r = nums.length - 1;
  let count = 0;
  while (l < r) {
    if (nums[l] + nums[r] < k) {
      l++;
    } else if (nums[l] + nums[r] > k) {
      r--;
    } else {
      l++;
      r--;
      count++;
    }
  }

  return count;
};
// @lc code=end


/**
 * - Time complexity: O(n log n).
 * 
 * - Space complexity: O(N) or O(log N) for sorting.
 *   - The space complexity of the sorting algorithm depends on the implementation of each program language.
 *   - For instance, the `std:sort()` function in C++ is implemented with the [Introsort](https://en.wikipedia.org/wiki/Introsort) algorithm whose space complexity is O(N).
 *   - In Java, the `Array.sort()` is implement as a variant of quicksort algorithm whose space complexity is O(log N).
 *   - In Javascript, depending on the data type and browser implementation <https://stackoverflow.com/questions/234683/javascript-array-sort-implementation>
 */