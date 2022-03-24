/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

/**
 * tags: #hash-table
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let hashTable = new Map();
  for (const i in nums) {
    if (!hashTable.has(nums[i])) {
      hashTable.set(nums[i], 1);
    } else {
      hashTable.set(nums[i], hashTable.get(nums[i]) + 1);
    }
  }

  for (const n of hashTable.keys()) {
    if (hashTable.get(n) == 1) {
      return n;
    }
  }

  return 0;
};
// @lc code=end

