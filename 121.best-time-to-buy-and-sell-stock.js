/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @amazon, @apple, @microsoft, @facebook, @adobe, @google, @bloomberg
// #array, #dynamic-programming
// #google-interview

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minPrice = Number.MAX_VALUE;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
};
// @lc code=end

/**
 * One Pass
 * Time complexity: O(n). Only one loop of a single pass is needed.
 * Space complexity: O(1). Only two variables are used.
 */
