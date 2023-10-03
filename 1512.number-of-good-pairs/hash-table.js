/*
 * @lc app=leetcode id=1512 lang=javascript
 *
 * [1512] Number of Good Pairs
 */

/**
 * tags: #hash-table
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  let count = new Map();
  let res = 0;
  for (const n of nums) {
    res += count.get(n) || 0;
    count.set(n, (count.get(n) || 0) + 1);
  }
  return res;
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 */