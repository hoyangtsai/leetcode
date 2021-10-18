/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @microsoft, @amazon, @linkedin, @facebook, @apple
// #array, #binary-search

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    let mid = parseInt((l + r) / 2);
    if (nums[mid] === target) return mid;

    if (nums[mid] >= nums[l]) { // Check if the left side is sorted
      if (target >= nums[l] && target < nums[mid]) r = mid - 1;
      else l = mid + 1;
    } else { // Otherwise, the right side is sorted
      if (target <= nums[r] && target > nums[mid]) l = mid + 1;
      else r = mid - 1;
    }
  }
  return -1;
};
// @lc code=end


/**
 * One pass Binary Search
 * 
 * - Time complexity: O(logN).
 * - Space complexity: O(1).
 */

const arr = [4, 5, 6, 7, 0, 1, 2];
const arr1 = [5, 1, 3];

const s1 = search(arr1, 5);
console.log('s1 =>', s1);
// const s2 = search(arr, 0);
// console.log('s2 =>', s2);
// const s3 = search(arr, 3);
// console.log('s3 =>', s3);