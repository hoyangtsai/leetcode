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


/**
 * - Time complexity: O(g! * K / (g - K)!).
 *   - In the worst case, we have to explore all potential combinations to the very end, i.e. the sum n is a large number (n > 9 * 9). At the first step, we have 9 choices, while at the second step, we have 8 choices, so on and so forth.
 *   - The number of exploration we need to make in the worst case would be P(9, K) = g! / (g - k)!, assuming that K <= 9. By the way, K cannot be grater than 9, otherwise we cannot have a combination whose digits are unique.
 *   - Each exploration take a constant time to process, except the last step where it takes O(K) time to make a copy of combination.
 *   - To sum up, the overall time complexity of the algorithm would be g! / (g - K)! * O(K) = O(g! * k / (g - K)!).
 * 
 * - Space complexity: O(K).
 *   - During the backtracking, we used a list to keep the current combination, which holds up to K elements, i.e. O(K).
 *   - Since we employed recursion in the backtracking, we would need some additional space for the function call stack, which could pile up to K consecutive invocation, i.e. O(K).
 *   - Hence, to sum up, the overall space complexity would be O(K).
 */