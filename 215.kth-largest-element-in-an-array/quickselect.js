/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

/**
 * com: #facebook, #linkedin, #amazon
 * tags: #sorting, #quickselect, #google-interview
 * {@link topKFrequent|./347.top-k-frequent-elements/quickselect.js}
 */

// kth largest = (N - k)th smallest = 1st largest in a sorted array

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  function quickselect(nums, l, r, kSmallest) {
    // best case for the first input
    if (l === r) {
      return nums[l];
    }

    const swap = (nums, i, j) => [nums[i], nums[j]] = [nums[j], nums[i]];

    const partition = (l, r, pivotIndex) => {
      const pivotValue = nums[pivotIndex];
      // 1. move pivotIndex to end
      swap(nums, pivotIndex, r);

      let storeIndex = l;
      // 2. move all elements of nums smaller than nums[pivotIndex] to the left
      for (let i = l; i <= r; i++) {
        if (nums[i] < pivotValue) {
          swap(nums, storeIndex, i);
          storeIndex++;
        }
      }

      // 3. move 1st element larger than nums[pivotIndex] to its right
      swap(nums, storeIndex, r);

      return storeIndex;
    }

    let pivotIndex = Math.floor(Math.random() * (r - l + 1) + l);

    // update position for next pivotIndex
    pivotIndex = partition(l, r, pivotIndex);

    // the pivotIndex is on (N - k)th smallest position
    if (kSmallest == pivotIndex) return nums[kSmallest];
    // update right, go left side
    else if (kSmallest < pivotIndex) return quickselect(nums, l, pivotIndex - 1, kSmallest);
    // update left, go right side
    return quickselect(nums, pivotIndex + 1, r, kSmallest);
  }

  return quickselect(nums, 0, nums.length - 1, nums.length - k);
};
// @lc code=end

/**
 * Quick select
 * Time complexity: O(N) in the average case, O(N^2) in the worst case.
 * space complexity: O(1).
 */

const ans1 = findKthLargest([3, 2, 1, 5, 6, 4], 4);
console.log('ans1 =>', ans1); // ans1: 4

const ans2 = findKthLargest([3, 2, 1, 5, 6, 4], 2);
console.log('ans2 =>', ans2); // ans2: 5