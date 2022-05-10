/*
 * @lc app=leetcode id=216 lang=javascript
 *
 * [216] Combination Sum III
 */

/**
 * tags: #backtracking
 * {@link 39.combination-sum.js}
 * {@link 40.combination-sum-ii.js}
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let results = [];

  function backtrack(remain, k, comb, next) {
    if (remain == 0 && comb.length == k) {
      // Note: it's important to make a deep copy here,
      // Otherwise the combination would be reverted in other branch of backtracking.
      results.push(comb.slice());
      return;
    } 
    
    if (remain < 0 || comb.length == k) {
      // Exceed the scope, no need to explore further.
      return;
    }

    // Iterate through the reduced list of candidates.
    for (let i = next; i < 9; i++) {
      comb.push(i + 1);
      backtrack(remain - i - 1, k, comb, i + 1);
      comb.pop();
    }
  }

  backtrack(n, k, [], 0);

  return results;
};
// @lc code=end

