/*
 * @lc app=leetcode id=309 lang=javascript
 *
 * [309] Best Time to Buy and Sell Stock with Cooldown
 */

/**
 * 
  所以對於每一天i，都有可能是三種狀態：
  1. 不持股且當天沒賣出,定義其最大收益 dp[i][0]
  2. 持股,定義其最大收益 dp[i][1]
  3. 不持股且當天賣出了，定義其最大收益 dp[i][2]

  初始化：
  dp[0][0] = 0 //本來就不持有，啥也沒幹
  dp[0][1] = -prices[0] //第0天只買入
  dp[0][2] = 0 //可以理解成第0天買入又賣出，那麼第0天就是“不持股且當天賣出了”這個狀態了，其收益為0，所以初始化為0是合理的
 */

/**
 * tags: #dynamic-programming
 * {@link maxProfit|./714.best-time-to-buy-and-sell-stock-with-transaction-fee.js}
 */

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