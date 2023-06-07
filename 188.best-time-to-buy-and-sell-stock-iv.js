/*
 * @lc app=leetcode id=188 lang=javascript
 *
 * [188] Best Time to Buy and Sell Stock IV
 */

/**
 * @Nvidia
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  if (k == 0) return 0;
  
  let profit = Array(k + 1).fill(0);
  let cost = Array(k + 1).fill(Number.MAX_VALUE)

  profit[0] = 0;
  
  for (const price of prices) {
    for (let i = 0; i < k; i++) {
      cost[i+1] = Math.min(cost[i+1], price - profit[i]);
      profit[i+1] = Math.max(profit[i+1], price - cost[i+1]);
    }
  }

  return profit[k];
};
// @lc code=end


/**
 * - Time complexity: O(n*k).
 * - Space complexity: O(k).
 */