/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

/**
 * tags: #sorting, #quickselect
 * {@link 215.kth-largest-element-in-an-array/quickselect.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  // get frequent nums map
  let numMap = {};
  for (let n of nums) {
    numMap[n] = (numMap[n] || 0) + 1;
  }

  // get array of unique nums as key
  let unique = Object.keys(numMap);

  function swap(i, j) {
    [unique[i], unique[j]] = [unique[j], unique[i]];
  }

  function partition(left, right, pivotIndex) {
    const pivotFreq = numMap[unique[pivotIndex]];
    // move pivot to the end
    swap(pivotIndex, right);

    let storeIndex = left;
    // move all elements of less frequency nums to the left
    for (let i = left; i <= right; i++) {
      if (numMap[unique[i]] < pivotFreq) {
        swap(storeIndex, i);
        storeIndex++;
      }
    }

    // move pivot to its final position
    swap(storeIndex, right);

    return storeIndex;
  }

  function quickselect(left, right, kSmallest) {
    // base case: the list contains only one element
    if (left == right) return;

    // select a random pivot index
    let pivotIndex = Math.floor(Math.random() * (right - left + 1) + left);

    // update position for next pivotIndex
    pivotIndex = partition(left, right, pivotIndex);

    // if the pivot is in its final sorted position
    if (kSmallest == pivotIndex) return;
    // update right, go left side
    else if (kSmallest < pivotIndex) return quickselect(left, pivotIndex - 1, kSmallest);
    // update left, go right side
    return quickselect(pivotIndex + 1, right, kSmallest);
  }

  const n = unique.length;

  quickselect(0, n - 1, n - k);

  return unique.slice(n - k);
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(N).
 */

console.log(topKFrequent([1,1,1,2,2,3], 2))