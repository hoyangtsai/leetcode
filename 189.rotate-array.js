/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

/**
 * tags: #math, #cyclic-replacement
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // make sure k not over-looping if nums.length is shorter than k
  // if k is greater than nums.length, it only loops multiples of nums.length's remaining
  // else k is less than nums.length, it loops as many times as k.
  k = k % nums.length;
  let count = 0;
  for (let start = 0; count < nums.length; start++) {
    let current = start;
    let prev = nums[start];
    do {
      let next = (current + k) % nums.length;
      let temp = nums[next];
      nums[next] = prev;
      prev = temp;
      current = next;
      count++;
    } while (start != current);
  }
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */