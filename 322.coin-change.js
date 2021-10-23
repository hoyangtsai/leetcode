/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @amazon, @microsoft, @apple, @google
// #dynamic-programming
// #google-interview

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const dp = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      // can be changed
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};
// @lc code=end

/**
 * Dynamic programming - Bottom up
 * Time complexity: O(S * n).
 * Sapce complexity: O(S). We use extra space for the memorization table.
 */

coinChange([1,2,5], 11);
