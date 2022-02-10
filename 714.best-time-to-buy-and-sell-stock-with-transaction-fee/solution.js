/*
 * @lc app=leetcode id=714 lang=javascript
 *
 * [714] Best Time to Buy and Sell Stock with Transaction Fee
 */

/**
 * tags: #greedy, #dynamic-programming, #state-machine
 * {@link maxProfit|./309.best-time-to-buy-and-sell-stock-with-cooldown.js}
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  let cash = 0;
  let hold = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    cash = Math.max(cash, hold + prices[i] - fee);
    hold = Math.max(hold, cash - prices[i]);
  }
  return cash;
};
// @lc code=end


/**
 * - Time complexity: O(N), where N is the number of prices.
 * - Space complexity: O(1), the space used by cash and hold.
 */