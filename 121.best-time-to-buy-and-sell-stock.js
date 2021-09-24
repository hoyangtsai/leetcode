/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// #array, #dynamic-programming
// @amazon, @apple, @microsoft, @adobe, @facebook, @snapchat, @google, @bloomberg, @expedia

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minprice = Number.MAX_SAFE_INTEGER;
  let maxprofit = 0;
  for (let i = 0; i < prices.length; i++) {
    minprice = Math.min(minprice, prices[i]);
    maxprofit = Math.max(maxprofit, prices[i] - minprice);
  }

  return maxprofit;
};
// @lc code=end

/**
 * One Pass
 * Time complexity: O(n). Only one loop of a single pass is needed.
 * Space complexity: O(1). Only two variables are used.
 */
