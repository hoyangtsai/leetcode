/*
 * @lc app=leetcode id=702 lang=javascript
 *
 * [702] Search in a Sorted Array of Unknown Size
 */

// @microsoft, @facebook
// #array, #binary-search, #interactive

// @lc code=start
/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) {
  if (reader.get(0) == target) return 0;

  // search boundaries
  let left = 0, right = 1;
  while (reader.get(right) < target) {
    left = right;
    right <<= 1;
  }

  // binary search
  while (left <= right) {
    let pivot = parseInt(left + ((right - left) >> 1));
    let num = reader.get(pivot);

    if (num == target) return pivot;
    if (num > target) right = pivot - 1;
    else left = pivot + 1;
  }

  return -1;
};
// @lc code=end


/** 
 * Binary search 
 * 
 * - Time complexity: O(log T), where T is an index of target value.
 * - Space complexity: O(1).
 */
