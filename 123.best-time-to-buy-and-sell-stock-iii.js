/*
 * @lc app=leetcode id=123 lang=javascript
 *
 * [123] Best Time to Buy and Sell Stock III
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let t1Cost = Number.MAX_VALUE,
      t2Cost = Number.MAX_VALUE;

  let t1Profit = 0, t2Profit = 0;

  for (const price of prices) {
    t1Cost = Math.min(t1Cost, price);
    t1Profit = Math.max(t1Profit, price - t1Cost);
    // reinvest the gained profit in the second transaction
    t2Cost = Math.min(t2Cost, price - t1Profit);
    t2Profit = Math.max(t2Profit, price - t2Cost);
  }

  return t2Profit;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(1).
 */
