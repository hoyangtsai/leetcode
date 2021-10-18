/*
 * @lc app=leetcode id=123 lang=javascript
 *
 * [123] Best Time to Buy and Sell Stock III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length <= 1) return 0;

  let leftMin = prices[0];
  let rightMax = prices[prices.length - 1];

  let leftProfits = new Array(prices.length).fill(0);
  let rightProfits = new Array(prices.length + 1).fill(0);

  // construct the bidirectional DP array
  for (let l = 1; l < prices.length; l++) {
    leftProfits[l] = Math.max(leftProfits[l - 1], prices[l] - leftMin);
    leftMin = Math.min(leftMin, prices[l]);

    let r = prices.length - l - 1;
    rightProfits[r] = Math.max(rightProfits[r + 1], rightMax - prices[r]);
    rightMax = Math.max(rightMax, prices[r]);
  }

  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, leftProfits[i] + rightProfits[i + 1]);
  }
  return maxProfit;
};
// @lc code=end

/**
 * Bidirectional Dynamic Programming
 * 
 * - Time complexity: O(N).
 * - Space complexity: O(N) for the two arrays that we keep in the algorithm.
 */
