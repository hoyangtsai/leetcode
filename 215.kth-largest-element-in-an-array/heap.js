/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */


// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // a function of sorting array by the smallest number first
  const sortSmallFirst = (a, b) => a - b;
  let heap = [];
  for (const n of nums) {
    heap = heap.concat(n).sort(sortSmallFirst);
    // keep the size of heap as length as kth, so the first number always is the kth largest number
    if (heap.length > k) {
      heap.shift();
    }
  }
  return heap.shift();
};
// @lc code=end

/**
 * Heap
 * Time complexity: O(N log K).
 * space complexity: O(K) to store the heap elements.
 */
