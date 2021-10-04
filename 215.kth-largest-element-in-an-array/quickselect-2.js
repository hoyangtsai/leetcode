/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @facebook, @amazon, @linkedin, @microsoft, @google, @apple
// #array, #divide-and-conquer, #heap, #sorting, #quickselect
// #google-interview

// kth largest = (N - k)th smallest = 1st largest in a sorted array

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  k = nums.length - k;

  function helper(start, end) {
    let pivot = nums[end]
    let p = start;
    for (let i = start; i <= end; i++) {
      if (nums[i] < pivot) {
        [nums[i], nums[p]] = [nums[p], nums[i]]
        p++
      }
    }
    [nums[p], nums[end]] = [nums[end], nums[p]];

    if (p < k) return helper(p + 1, end)
    if (p > k) return helper(start, p - 1)
    return nums[p]
  }

  return helper(0, nums.length - 1);
};
// @lc code=end

/**
 * Quick select
 * Time complexity:
 * space complexity: 
 */

const ans1 = findKthLargest([3, 2, 1, 5, 6, 4], 4);
console.log('ans1 =>', ans1); // ans1: 4

const ans2 = findKthLargest([3, 2, 1, 5, 6, 4], 2);
console.log('ans2 =>', ans2); // ans2: 5