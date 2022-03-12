/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// tips: cannot sell and buy at the same day
/**
 * tags: #greedy, #stock
 */ 

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    // if next day greater than the previous day
    if (prices[i] > prices[i - 1]) {
      // accumulation
      maxProfit += prices[i] - prices[i - 1];
    }
  }
  return maxProfit;
};
// @lc code=end
