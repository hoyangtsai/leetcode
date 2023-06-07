/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

/**
 * @Nvidia
 * tags: #backtracking, #permutation
 * {@link 78.subsets.js}
 * {@link 47.permutations-ii.js}
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
      if (arr.includes(nums[i])) continue;

      arr.push(nums[i]);

      backtrack(arr);

      // reset for backtracking
      arr.pop();
    }
  }
  
  backtrack([]);
  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(\sum_{n=1}^{N} P(N,k)), where P(N, k) = N!/(N - k)! = N(N-1)...(N-k+1) is so-called [k-permutations_of_N or partial permutation](https://en.wikipedia.org/wiki/Permutation#k-permutations_of_n). 
 * - Space complexity: O(N!) since one has to keep N! solutions.
 */