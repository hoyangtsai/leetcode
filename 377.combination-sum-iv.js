/*
 * @lc app=leetcode id=377 lang=javascript
 *
 * [377] Combination Sum IV
 */

/**
 * tags: #dynamic-programming
 * {@link 518.coin-change-2.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  // minor optimization
  // nums.sort((a, b) => a - b);
  let dp = Array(target + 1).fill(0);
  dp[0] = 1;

  for (let combSum = 1; combSum < dp.length; combSum++) {
    for (const num of nums) {
      if (combSum - num >= 0) {
        dp[combSum] += dp[combSum - num];
      }
      // minor optimization, early stopping
      // else
      //   break;
    }
  }

  return dp[target];
};
// @lc code=end


/**
 * - Time complexity: O(T * N)
 *   - We have a nested loop, with the number of iterations as T and N respectively.
 * - Space complexity: O(T)
 */