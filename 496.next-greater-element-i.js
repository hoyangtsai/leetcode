/*
 * @lc app=leetcode id=496 lang=javascript
 *
 * [496] Next Greater Element I
*/

/**
 * tags: #stack, #monotonic-stack, #hash-table
 * {@link 739.daily-temperatures/monotonic-stack.js}
 * {@link 503.next-greater-element-ii.js}
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  // num1 is a subset of num2
  // all numbers of num1 will be contained in num2
  let stack = [];
  let map = new Map();

  // record what is number 1 the greater number to number 2
  for (let i = 0; i < nums2.length; i++) {
    while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
      map.set(stack.pop(), nums2[i]) // map {number 1, number 2}
    }
    stack.push(nums2[i]);
  }

  // the numbers no next greater numbers set -1
  while (stack.length > 0) {
    map.set(stack.pop(), -1);
  }

  let res = Array(nums1.length);
  for (let i = 0; i < nums1.length; i++) {
    res[i] = map.get(nums1[i]);
  }

  return res;
};
// @lc code=end


/**
 * - Time complexity: O(n). 
 *   The entire num2 array (of size n) is scanned only once. Each of the stack's n elements are push and popped exactly once.
 *   The nums1 array is also scanned only once. All together this requires O(n + n + m) time.
 *   Since nums1 must be a subset of nums2, we know m must be less than or equal to n. Therefore, the time complexity can be simplified to O(n).
 * - Space complexity: O(n). Map will store n key-value pairs while stack will contain at most n elements at any given time.
 */