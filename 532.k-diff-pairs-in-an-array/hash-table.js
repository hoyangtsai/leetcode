/*
 * @lc app=leetcode id=532 lang=javascript
 *
 * [532] K-diff Pairs in an Array
 */

/**
 * @LINE, @shopback
 * tags: #hash-table, #array-number-pair
 * #my-interview
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  let numMap = new Map();
  for (const n of nums) {
    numMap.set(n, (numMap.get(n) || 0) + 1);
  }

  let pairs = 0;
  for (const [n, c] of numMap) {
    if (k > 0 && numMap.has(n + k)) {
      pairs++;
    } else if (k == 0 && c > 1) { // more than 2 same numbers
      pairs++;
    }
  }
  return pairs;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * 
 * - Space complexity: O(N).
 *   We keep a table to count the frequency of each unique number in the input.
 *   In the worst case, all numbers are unique in the array. As a result, the maximum size of our table would be O(N).
 */