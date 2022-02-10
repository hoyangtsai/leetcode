/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

/**
 * com: #amazon, #facebook, #apple, #microsoft
 * tags: #dynamic-programming, #google-interview
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minPrice = prices[0];
  let maxProfit = prices[1] - prices[0];
  for (let i = 1; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }
  return maxProfit;
};
// @lc code=end

/**
 * One Pass
 * Time complexity: O(n). Only one loop of a single pass is needed.
 * Space complexity: O(1). Only two variables are used.
 */
