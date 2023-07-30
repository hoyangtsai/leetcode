/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

/**
 * @Nvidia
 * tags: #math
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) return 1;
    
  let pow = Math.abs(n);
    
	let result = pow % 2 === 0 ?
    myPow(x*x, pow/2) : myPow(x*x, (pow-1)/2) * x;
    
  return n < 0 ? 1 / result : result;
};
// @lc code=end


/**
 * - Time complexity: O(log n)
 * - Space complexity: O(1)
 */