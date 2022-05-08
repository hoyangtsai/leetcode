/*
 * @lc app=leetcode id=1679 lang=javascript
 *
 * [1679] Max Number of K-Sum Pairs
 */

/**
 * tags: #hash-table, #number-pair
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
  let map = {};
  let count = 0;
  for (const n of nums) {
    const remain = k - n;
    if (map[remain] > 0) {
      map[remain] = map[remain] - 1;
      count++;
    } else {
      map[n] = (map[n] || 0) + 1;
    }
  }

  return count;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */