/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

/**
 * tags: #permutation, #backtracking
 * {@link 46.permutations.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let ans = [];
  let remain = {};
  let set = new Set(nums);

  for (const num of nums) {
    remain[num] = (remain[num] || 0) + 1;
  }

  function backtrack(arr, remain) {
    if (arr.length == nums.length) {
      ans.push(arr.slice());
      return;
    }

    // for (let i = 0; i < nums.length; i++) {
    for (const num of set) {
      // if (used[i] || i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) continue;
      if (remain[num] == 0) continue;

      arr.push(num);
      // used[i] = true;
      remain[num]--;
      
      backtrack(arr, remain);

      // reset for backtracking
      arr.pop();
      // used[i] = false;
      remain[num]++;
    }
  }

  // nums.sort((a, b) => a - b);

  // backtrack([], Array(nums.length).fill(false));
  backtrack([], remain);
  
  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(\sum_{n=1}^{N} P(N,k)), where P(N, k) = N!/(N - k)! = N(N-1)...(N-k+1) is so-called [k-permutations_of_N or partial permutation](https://en.wikipedia.org/wiki/Permutation#k-permutations_of_n). 
 * 
 * - Space complexity: O(N)
 */