/*
 * @lc app=leetcode id=1799 lang=javascript
 *
 * [1799] Maximize Score After N Operations
 */

/**
 * tags: #greatest-common-division
 * {@link 1071.greatest-common-divisor-of-strings.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
  // Utility function to calculate the gcd of two numbers.
  function gcd(a, b) {
    if (b == 0) {
      return a;
    }
    return gcd(b, a % b);
  }

  function backtrack(nums, mask, pairsPicked, memo) {
    // If we have picked all the numbers from 'nums' array, we can't get more score.
    if (2 * pairsPicked == nums.length) {
      return 0;
    }

    // If we already solved this sub-problem then return the stored result.
    if (memo[mask] != -1) {
      return memo[mask];
    }

    let maxScore = 0;

    // Iterate on 'nums' array to pick the first and second number of the pair.
    for (let firstIndex = 0; firstIndex < nums.length; ++firstIndex) {
      for (let secondIndex = firstIndex + 1; secondIndex < nums.length; ++secondIndex) {

        // If the numbers are same, or already picked, then we move to next number.
        if (((mask >> firstIndex) & 1) == 1 || ((mask >> secondIndex) & 1) == 1) {
          continue;
        }

        // Both numbers are marked as picked in this new mask.
        let newMask = mask | (1 << firstIndex) | (1 << secondIndex);

        // Calculate score of current pair of numbers, and the remaining array.
        let currScore = (pairsPicked + 1) * gcd(nums[firstIndex], nums[secondIndex]);
        let remainingScore = backtrack(nums, newMask, pairsPicked + 1, memo);

        // Store the maximum score.
        maxScore = Math.max(maxScore, currScore + remainingScore);
        // We will use old mask in loop's next interation, 
        // means we discarded the picked number and backtracked.
      }
    }

    // Store the result of the current sub-problem.
    memo[mask] = maxScore;
    return maxScore;
  }

  let memoSize = parseInt(1 << nums.length); // 2^(nums array size)
  let memo = Array(memoSize).fill(-1);

  return backtrack(nums, 0, 0, memo);
};
// @lc code=end


/**
 * - Time complexity: O(2^2n * (2n)^2 * logA) = O(4 * n^2 * logA)
 *   - We make exponential amount of calls to `backtrack` function, but as only 2^m unique states of `mask`, due to memoization, we will only evaluate 2^m calls of the function (in other calls we directly return stored result).
 *   - In each backtrack function call we iterate on all pairs using a nested for loop which will take O(m^2)  time, and for each pair, we perform a gcd operation which will take at most O(logA) time. So, we take O(m^2 * logA) in each function call.
 *   - Thus, overall we take O(2^m * m^2 * logA) time.
 * - Space complexity: O(n + 2^2n) = O(4^n)
 *   - The recursive stack will take at most O(n) space at any time.
 *   - We store the results of all possible states in the `memo` array, and a total of 2^m = 2^2n states are possible.
 *   - Thus, we use O(n + 2^2n) = O(4^n) space.
 * 
 *  O(n + 2^(2n)) = O(2^(2n)) [since 2^(2n) grows faster than n, we can ignore the linear part and only consider the exponential part]
 *  = O((2^2)^n) [using the exponentiation rule that (a^b)^c = a^(b*c)]
 *  = O(4^n) [simplifying the expression using the above rule]
 */