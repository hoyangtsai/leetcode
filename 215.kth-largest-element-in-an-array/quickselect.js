/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @facebook, @amazon, @linkedin, @microsoft, @google, @apple
// #heap, #sorting, #quickselect
// #google-interview
// &347

// kth largest = (N - k)th smallest = 1st largest in a sorted array

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  function partition(l, r, pivotIndex) {
    const privotValue = nums[pivotIndex];
    // 1. move pivotIndex to end
    swap(pivotIndex, r);

    let storeIndex = l;
    // 2. move all elements of nums smaller than nums[pivotIndex] to the left
    for (let i = l; i <= r; i++) {
      if (nums[i] < privotValue) {
        swap(storeIndex, i);
        storeIndex++;
      }
    }

    // 3. move 1st element larger than nums[pivotIndex] to its right
    swap(storeIndex, r);

    return storeIndex;
  }

  function quickselect(l, r, kSmallest) {
    // best case for the first input
    if (l === r) {
      return nums[l];
    }

    let pivotIndex = Math.floor(Math.random() * (r - l + 1) + l);

    // update position for next pivotIndex
    pivotIndex = partition(l, r, pivotIndex);
    
    // the pivotIndex is on (N - k)th smallest position
    if (kSmallest == pivotIndex) return nums[kSmallest];
    // update right, go left side
    else if (kSmallest < pivotIndex) return quickselect(l, pivotIndex - 1, kSmallest);
    // update left, go right side
    return quickselect(pivotIndex + 1, r, kSmallest);
  }

  return quickselect(0, nums.length - 1, nums.length - k);
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