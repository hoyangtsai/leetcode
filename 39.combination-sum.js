/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let results = [];

  function backtrack(remain, comb, start) {
    if (remain == 0) {
      // make a deep copy of the current combination
      results.push(comb.slice());
      return;
    }     
    // exceed the scope, stop exploration.
    if (remain < 0) return;

    for(let i = start; i < candidates.length; i++) {
      // add the number into the combination
      comb.push(candidates[i]);
      backtrack(remain - candidates[i], comb, i);
      // backtrack, remove the number from the combination
      comb.pop();
    }
  }

  backtrack(target, [], 0);
  return results;
};
// @lc code=end

