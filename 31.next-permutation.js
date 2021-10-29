/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */

// #array, #two-pointers
// @facebook, @amazon, @microsoft, @apple
// #google-interview

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let pivot = -1;
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      pivot = i - 1;
      break;
    }
  }

  if (pivot === -1) { // array is in descending order
    nums.reverse();
    return;
  }
  // pivot the index with the last number
  for (let i = nums.length - 1; i > pivot; i--) {
    if (nums[i] > nums[pivot]) {
      swap(nums, i, pivot);
      break;
    }
  }
  // swap afterward the next pivot
  for (let i = pivot + 1, j = nums.length - 1; i < j; i++, j--) {
    if (nums[i] > nums[j]) {
      swap(nums, i, j);
    }
  }

  function swap(nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
};
// @lc code=end

/**
 * Single pass algorithm
 * 
 * - Time complexity: O(n)
 * - Space complexity: O(1)
 */

const arr = [1, 2, 6, 8, 7];
nextPermutation(arr);
console.log('arr =>', arr);