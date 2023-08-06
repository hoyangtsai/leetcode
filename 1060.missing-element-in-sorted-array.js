/*
 * @lc app=leetcode id=1060 lang=javascript
 *
 * [1060] Missing Element in Sorted Array
 */

/**
 * tags: #binary-search, #missing-number
 * {@link 1539.kth-missing-positive-number.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function(nums, k) {
  const n = nums.length;
  let left = 0, right = n - 1;

  while (left < right) {
    let mid = right - parseInt((right - left) / 2);
    if (nums[mid] - nums[0] - mid < k) {
      left = mid;
    } else{
      right = mid - 1;
    }
  }

  return nums[0] + k + left;
};
// @lc code=end


/**
 * - Time complexity: O(log n)
 * - Space complexity: O(1)
 */

console.log(missingElement([4,7,9,10], 1))
console.log(missingElement([4,7,9,10], 3))
console.log(missingElement([1,2,4], 3))