/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const hashTable = new Set(nums);

  let result = [];

  // Iterate over the numbers from 1 to N and add all those
  // that don't appear in the hash table. 
  for (let i = 1; i <= nums.length; i++) {
    if (!hashTable.has(i)) {
      result.push(i);
    }
  }

  return result;
};
// @lc code=end

