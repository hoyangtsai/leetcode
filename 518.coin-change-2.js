/*
 * @lc app=leetcode id=518 lang=javascript
 *
 * [518] Coin Change 2
 */

/**
 * tags: #dynamic-programming, #unbounded-knapsack
 * {@link climbStairs|./70.climbing-stairs/dynamic-programming.js}
 * {@link coinChange|./322.coin-change.js}
 */

// https://leetcode-cn.com/problems/coin-change-2/solution/ling-qian-dui-huan-iihe-pa-lou-ti-wen-ti-dao-di-yo/

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  let dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (const coin of coins) {
    for (let j = 1; j <= amount; j++) { // iterate amount
      if (j < coin) continue; 
      // coin must greater or equal to amount
      if (j >= coin) {
        dp[j] += dp[j - coin];
      }
    }
  }

  return dp[amount];
};
// @lc code=end


/**
 * - Time complexity: O(N * amount), where N is a length of coins array.
 * - Space complexity: O(amount) to keep dp array.
 */
