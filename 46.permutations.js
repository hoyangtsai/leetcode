/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @microsoft, @amazon, @linkedin, @apple
// #array, #backtracking, #depth-first-search
// &79

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [];

  const N = nums.length;

  if (N == 0) return res;

  function backtrack(depth, path, used, res) {
    if (depth == N) {
      res.push(Array.from(path));
      return;
    }

    for (let i = 0; i < N; i++) {
      if (!used[i]) {
        path.push(nums[i]);
        used[i] = true;

        backtrack(depth + 1, path, used, res);

        // reset for backtracking
        path.pop();
        used[i] = false;
      }
    }
  }
  
  backtrack(0, [], Array(N).fill(false), res);
  return res;
};
// @lc code=end

