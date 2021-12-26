/*
 * @lc app=leetcode id=1137 lang=javascript
 *
 * [1137] N-th Tribonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if (n < 3) return n === 0 ? 0 : 1;

  let t0 = 0, t1 = 1, t2= 1;
  for (let i = 3; i <= n; i++) {
    let tmp = t0 + t1 + t2;
    t0 = t1;
    t1 = t2;
    t2 = tmp;    
  }

  return t2;
};
// @lc code=end

