/*
 * @lc app=leetcode id=1052 lang=javascript
 *
 * [1052] Grumpy Bookstore Owner
 */

/**
 * tags: #greedy, #sliding-window
 * @link https://mp.weixin.qq.com/s/PcQVre2kawG3CTBp-45DBg
 */

// @lc code=start
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
  const n = customers.length;
  // let satisfied = 0;
  // for (let i = 0; i < n; i++) {
  //   if (grumpy[i] == 0) {
  //     satisfied += customers[i];
  //     customers[i] = 0;
  //   }
  // }

  // let accumulation = 0, max = 0;
  // for (let i = 0; i < n; i++) {
  //   accumulation += customers[i];
  //   if (i >= minutes) {
  //     accumulation -= customers[i - minutes];
  //   }
  //   max = Math.max(max, accumulation);
  // }

  let satisfied = 0, maxMakeSatisfied = 0, winMakeSatisfied = 0;
  for (let i = 0; i < n; i++) {
    if (grumpy[i] == 0) {
      satisfied += customers[i];
    } else {
      winMakeSatisfied += customers[i];
    }
    if (i >= minutes) {
      // if previous grumpy is 1 will be subtracted
      winMakeSatisfied -= grumpy[i - minutes] * customers[i - minutes];
    }
    maxMakeSatisfied = Math.max(maxMakeSatisfied, winMakeSatisfied);
  }

  return satisfied + maxMakeSatisfied;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */