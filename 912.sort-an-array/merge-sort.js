/*
 * @lc app=leetcode id=912 lang=javascript
 *
 * [912] Sort an Array
 */

/**
 * tags: #merge-sort
 * {@link https://wsvincent.com/javascript-algorithms-mergesort/}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  if (nums.length < 2) {
    return nums;
  }

  // top-down implementation
  function merge(left, right) {
    let arr = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        arr.push(left.shift());
      } else {
        arr.push(right.shift());
      }
    }
    return arr.concat(left.slice().concat(right.slice()));
  }

  const middle = Math.floor(nums.length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  return merge(sortArray(left), sortArray(right));
};
// @lc code=end

