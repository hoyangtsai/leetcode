/*
 * @lc app=leetcode id=1475 lang=javascript
 *
 * [1475] Final Prices With a Special Discount in a Shop
 */

/**
 * tags: #stack, #monotonic-stack
 * {@link 503.next-greater-element-ii.js}
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
  let stack = [];
  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] >= prices[i]) {
      prices[stack.pop()] -= prices[i];
    }
    stack.push(i);
  }
  return prices;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */