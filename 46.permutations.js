/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

/**
 * com: #microsoft, #amazon, #linkedin, #apple
 * tags: #backtracking
 * {@link subsets|./78.subsets.js}
 * {@link permuteUnique|./47.permutations-ii.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let ans = [];

  function backtrack(arr, ans) {
    if (arr.length == nums.length) {
      // ans.push(Array.from(arr));
      ans.push(arr.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // if (used[i]) continue;
      if (arr.includes(nums[i])) continue;

      arr.push(nums[i]);
      // used[i] = true;

      backtrack(arr, ans);

      // reset for backtracking
      arr.pop();
      // used[i] = false;
    }
  }
  
  // backtrack([], ans, Array(nums.length).fill(false));
  backtrack([], ans);
  return ans;
};
// @lc code=end

