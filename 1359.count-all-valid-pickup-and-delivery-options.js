/*
 * @lc app=leetcode id=1359 lang=javascript
 *
 * [1359] Count All Valid Pickup and Delivery Options
 */

/**
 * tags: #math, #modular-arithmetic
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function(n) {
  const MOD = 1e9 + 7;

  let count = 1;
  for (let i = 2; i <= n; i++) {
    // Ways to arrange all pickups, 1*2*3*4*5*...*n
    count = count * i;
    // Ways to arrange all deliveries, 1*3*5*...*(2n-1)
    count = count * (2 * i - 1);
    count %= MOD;
  }
  return count;
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(1)
 */