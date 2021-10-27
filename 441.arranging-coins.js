/*
 * @lc app=leetcode id=441 lang=javascript
 *
 * [441] Arranging Coins
 */

// @salesforce, @apple
// #binary-search

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let left = 0, right = n;
  while (left <= right) {
    let mid = parseInt(left + (right - left) / 2);
    let curr = mid * (mid + 1) / 2;

    if (curr == n) {
      return mid;
    }

    if (n < curr) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
};
// @lc code=end


/**
 * - Time complexity: O(log N).
 * - Space complexity: O(1).
 */