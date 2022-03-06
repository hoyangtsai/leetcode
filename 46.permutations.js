/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

/**
 * #microsoft, #amazon, #linkedin, #apple
 * tags: #backtracking, #permutation
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

  function backtrack(arr) {
    if (arr.length == nums.length) {
      ans.push(arr.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // if (used[i]) continue;
      if (arr.includes(nums[i])) continue;

      arr.push(nums[i]);
      // used[i] = true;

      backtrack(arr);

      // reset for backtracking
      arr.pop();
      // used[i] = false;
    }
  }
  
  // backtrack([], ans, Array(nums.length).fill(false));
  backtrack([]);
  return ans;
};
// @lc code=end

