/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

/**
 * tags: #backtracking
 * {@link 78.subsets/backtracking.js}
 * {@link 40.combination-sum-ii.js}
 * {@link 216.combination-sum-iii.js}
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let results = [];

  function backtrack(remain, comb, next) {
    if (remain == 0) {
      // make a deep copy of the current combination
      results.push(comb.slice());
      return;
    }     
    // exceed the scope, stop exploration.
    if (remain < 0) return;

    for(let i = next; i < candidates.length; i++) {
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


/**
 * Let N be the number of candidates, T be the target of value, and M be the minimal value among the candidates.
 * - Time complexity: O(N^T/M + 1)
 * 
 * - Space complexity: O(T/M)
 */