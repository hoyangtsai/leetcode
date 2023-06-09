/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

/**
 * tags: #divide-and-conquer
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  function countInRange(nums, n, lo, hi) {
    let count = 0;
    for (let i = lo; i <= hi; i++) {
      if (nums[i] == n) count++;
    }
    return count;
  }

  function majorityElementRec(nums, lo, hi) {
    // base case; the only element in an array of size 1 is the majority element.
    if (lo == hi) {
      return nums[lo];
    }

    // recurse on left and right halves of this slice.
    let mid = parseInt((hi - lo) / 2) + lo;
    let left = majorityElementRec(nums, lo, mid);
    let right = majorityElementRec(nums, mid + 1, hi);

    // if the two halves agree on the majority element, return it.
    if (left == right) {
      return left;
    }

    // otherwise, count each element and return the "winner".
    let leftCount = countInRange(nums, left, lo, hi);
    let rightCount = countInRange(nums, right, lo, hi);

    return leftCount > rightCount ? left : right;
  }

  return majorityElementRec(nums, 0, nums.length - 1);
};
// @lc code=end


/**
 * - Time complexity: O(n log n).
 * - Space complexity: O(log n).
 */