/*
 * @lc app=leetcode id=629 lang=javascript
 *
 * [629] K Inverse Pairs Array
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function(n, k) {
  let dp = new Array(k + 1).fill(0);
  const M = 1000000007;
  for (let i = 1; i <= n; i++) {
    let temp = new Array(k + 1).fill(0);
    temp[0] = 1;
    for (let j = 1; j <= k ; j++) {
      let val = (dp[j] + M - ((j - i) >= 0 ? dp[j - i] : 0)) % M;
      temp[j] = (temp[j - 1] + val) % M;
    }
    dp = temp;
  }
  return ((dp[k] + M - (k > 0 ? dp[k - 1] : 0)) % M); 
};
// @lc code=end


/**
 * - Time complexity: O(n * k), dp array of size k + 1 is filled n + 1 times.
 * - Space complexity: O(k), dp array of size (k + 1) is used.
 */