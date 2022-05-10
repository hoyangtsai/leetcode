/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */

/**
 * tags: #backtracking
 * {@link 78.subsets.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let powerset = [];

  function backtrack(index, arr) {
    powerset.push(arr.slice());

    for (let i = index; i < nums.length; i++) {
      // skip duplicates
      if (i > index && nums[i] == nums[i - 1]) continue;
      
      arr.push(nums[i]);
      backtrack(i + 1, arr);
      arr.pop();
    }
  }

  nums.sort((a, b) => a - b);

  backtrack(0, []);

  return powerset;
};
// @lc code=end

