/*
 * @lc app=leetcode id=1512 lang=javascript
 *
 * [1512] Number of Good Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  let count = Array(101).fill(0);
  let res = 0;
  for (const n of nums) {
    res += count[n];
    count[n]++;
  }
  return res;
};
// @lc code=end



const ans = numIdenticalPairs([1, 2, 3, 1, 1, 3])
console.log('ans :>> ', ans);