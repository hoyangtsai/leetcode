/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let powerset = [];

  function backtrack(index, arr) {
    powerset.push(arr.slice());
    for (let i = index; i < nums.length; i++) {
      // backtrack(i + 1, [...arr, nums[i]]);
      arr.push(nums[i]);
      backtrack(i + 1, arr);
      arr.pop();
    }
  }

  backtrack(0, []);

  return powerset;
};
// @lc code=end

