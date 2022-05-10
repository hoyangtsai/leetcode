/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

/**
 * tags: #backtracking
 * {@link 39.combination-sum.js}
 * {@link 216.combination-sum-iii.js}
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let results = [];

  function backtrack(remain, comb, next) {
    if (remain == 0) {
      results.push(comb.slice());
      return;
    }

    // exceed the scope, stop exploration.
    if (remain < 0) return;

    for (let i = next; i < candidates.length; i++) {
      if (i > next && candidates[i] == candidates[i - 1]) continue;

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

