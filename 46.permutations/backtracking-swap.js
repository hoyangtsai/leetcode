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

  function backtrack(arr, next) {
    if (next == nums.length) {
      ans.push(arr.slice());
      return;
    }

    for (let i = next; i < nums.length; i++) {
      // place i-th integer next 
      // in the current permutation
      [arr[next], arr[i]] = [arr[i], arr[next]];

      // use next integers to complete the permutations
      backtrack(arr, ans, next + 1);

      // backtrack
      [arr[next], arr[i]] = [arr[i], arr[next]];
    }
  }

  // convert nums into list since the output is a list of lists
  let numsList = Array.from(nums);

  backtrack(numsList, 0);
  return ans;
};
// @lc code=end

