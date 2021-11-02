/*
 * @lc app=leetcode id=309 lang=javascript
 *
 * [309] Best Time to Buy and Sell Stock with Cooldown
 */

// @adobe
// #dynamic-programming
// &713

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const n = prices.length;

  // let dp = Array.from(Array(n), () => Array(3));

  // not holding and not selling at that day
  let held = -Infinity;
  // dp[0][0] = 0;
  
  // buy in at day 0
  let profit = 0;
  // dp[0][1] = -prices[0];

  // buy in and sell out at day 0
  // not holding and sell out at that day, the profit is 0
  let cash = 0;
  // dp[0][2] = 0;

  for (let i = 0; i < n; i++) {
    let preSold = cash;

    cash = held + prices[i];
    held = Math.max(held, profit - prices[i]);
    profit = Math.max(profit, preSold);

    // dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2]);
    // dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    // dp[i][2] = dp[i - 1][1] + prices[i];
  }

  return Math.max(cash, profit);
};
// @lc code=end


const p = maxProfit([1, 2, 3, 0, 2]);
console.log(p);