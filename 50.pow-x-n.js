/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  let N = n;
  if (N < 0) {
    x = 1 / x;
    N = -N;
  }

  let ans = 1;
  let currentProduct = x;
  for (let i = N; i > 0; i /= 2) {
    if ((i % 2) == 1) {
      ans = ans * currentProduct;
    }
    currentProduct = currentProduct * currentProduct;
  }
  return ans;
};
// @lc code=end



let ans = myPow(2.00000, 10);
console.log(ans);