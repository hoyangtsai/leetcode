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
  let sortNums = nums;
  
  function swap(a, b) {
    let temp = sortNums[a];
    sortNums[a] = sortNums[b];
    sortNums[b] = temp;
  }

  function partition(l, r, pivotIndex) {
    let pivot = sortNums[pivotIndex];
    // 1. move pivot to end
    swap(pivotIndex, r);
    let storeIndex = l;

    // 2. move all smaller elements to the left
    for (let i = l; i <= r; i++) {
      if (sortNums[i] < pivot) {
        swap(storeIndex, i);
        storeIndex++;
      }
    }

    // 3. move pivot to its final place
    swap(storeIndex, r);

    return storeIndex;
  }

  function quickselect(l, r, kthSmall) {
    if (l == r) {
      return sortNums[l];
    }

    // random between min (included) and max (included)
    let pivotIndex = l + Math.floor(Math.random() * (r - l + 1));
    pivotIndex = partition(l, r, pivotIndex);

    // the pivot is on (N - k)th smallest position
    if (kthSmall == pivotIndex)
      return sortNums[kthSmall];
    // go left side
    else if (kthSmall < pivotIndex)
      return quickselect(l, pivotIndex - 1, kthSmall);
    // go right side
    return quickselect(pivotIndex + 1, r, kthSmall);
  }
  
  // kth largest is (N - k)th smallest
  return quickselect(0, sortNums.length - 1, sortNums.length - k);
};
// @lc code=end

