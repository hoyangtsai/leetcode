/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let results = [];

  function backtrack(remain, comb, start) {
    if (remain == 0) {
      results.push(comb.slice());
      return;
    }

    // exceed the scope, stop exploration.
    if (remain < 0) return;

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] == candidates[i - 1]) continue;

      comb.push(candidates[i]);
      backtrack(remain - candidates[i], comb, i + 1);
      comb.pop();
    }
  }

  candidates.sort((a, b) => a - b);

  backtrack(target, [], 0);
  return results;
};
// @lc code=end

