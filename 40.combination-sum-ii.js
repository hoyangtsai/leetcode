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


/**
 * - Time complexity: O(2^N)
 *   - In the worst case, the algorithm will exhaust all possible combinations from the input array, which in total amounts to 2^N.
 *   - The sorting will take O(N log N).
 *   - To sum up, the overall time complexity of the algorithm is dominated by backtracking process, which is O(2^N).
 * 
 * - Space complexity: (N).
 *   - The variable `comb` to keep track of the current combination we build, which requires O(N) space.
 *   - In addition, we apply recursion in the algorithm, which will incur additional memory consumption in the function call stack. In the worst case, the stack will pile up to O(N) space.
 *    - To sum up, the overall space complexity of the algorithm is O(N) + O(N) = O(N).
 */