/*
 * @lc app=leetcode id=1671 lang=javascript
 *
 * [1671] Minimum Number of Removals to Make Mountain Array
 */

/**
 * tags: #longest-increasing-sequence, #LIS, #binary-search
 * {@link 300.longest-increasing-subsequence/binary-search.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function(nums) {
  const n = nums.length;
  let dp = Array(n).fill(0);
  let mono = Array(n).fill(Math.pow(10, 9) + 1);

  // bisect search, return a leftmost index
  function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left < right) {
      let mid = parseInt((left + right) / 2);

      if (arr[mid] === target) return mid;

      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }

  for (let i = 0; i < nums.length; i++) {
    // let j = mono.findIndex((el) => el >= nums[i]);
    let j = binarySearch(mono, nums[i]);
    mono[j] = nums[i];
    dp[i] = j ? dp[i] + j + 1 : -n;
  }

  mono = Array(n).fill(Math.pow(10, 9) + 1);

  for (let i = n - 1; i >= 0; i--) {
    // let j = mono.findIndex((el) => el >= nums[i]);
    let j = binarySearch(mono, nums[i]);
    mono[j] = nums[i];
    dp[i] = j ? dp[i] + j : -n;
  }

  return n - Math.max(...dp);
};
// @lc code=end


/**
 * - Time complexity: O(n log n).
 * - Space complexity: O(n).
 */


console.log(minimumMountainRemovals([2, 1, 1, 5, 6, 2, 3, 1]));