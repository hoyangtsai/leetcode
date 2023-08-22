/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

/**
 * tags: #heap
 * {@link 347.top-k-frequent-elements/heap.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // sorting smallest number first
  nums.sort((a, b) => a - b);
  let heap = [];
  for (const n of nums) {
    heap.push(n);
    // keep the size of heap as length as kth, so the first number always is the kth largest number
    if (heap.length > k) {
      heap.shift();
    }
  }
  return heap.shift();
};
// @lc code=end


/**
 * - Time complexity: O(N log k).
 * - Space complexity: O(K) to store the heap elements.
 */
