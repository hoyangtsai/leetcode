/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let ans = [];

  function backtrack(arr, ans, first) {
    if (first == nums.length) {
      ans.push(arr.slice());
      return;
    }

    for (let i = first; i < nums.length; i++) {
      // place i-th integer first 
      // in the current permutation
      [arr[first], arr[i]] = [arr[i], arr[first]];

      // use next integers to complete the permutations
      backtrack(arr, ans, first + 1);

      // backtrack
      [arr[first], arr[i]] = [arr[i], arr[first]];
    }
  }

  // convert nums into list since the output is a list of lists
  let numsList = Array.from(nums);

  backtrack(numsList, ans, 0);
  return ans;
};
// @lc code=end

