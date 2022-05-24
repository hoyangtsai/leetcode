/*
 * @lc app=leetcode id=474 lang=javascript
 *
 * [474] Ones and Zeroes
 */

/**
 * tags: #dynamic-programming, #knapsack
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  function countZeroesOnes(s) {
    // count each string zeros and ones
    // c[1] counts zeros, c[0] counts ones
    let c = [0, 0]; 
    for (let i = 0; i < s.length; i++) {
      c[s.charAt(i)]++;
    }
    return c;
  }

  let dp = Array.from(Array(m + 1).fill(0), () => Array(n + 1).fill(0));

  for (const s of strs) {
    let count = countZeroesOnes(s);
    for (let zeroes = m; zeroes >= count[0]; zeroes--) {
      for (let ones = n; ones >= count[1]; ones--) {
        dp[zeroes][ones] = Math.max(1 + dp[zeroes - count[0]][ones - count[1]], dp[zeroes][ones]);
      }
    }
  }

  return dp[m][n];
};
// @lc code=end


/**
 * - Time complexity: O(l * m * n). Three nested loops are their, where l is the length of strs, m and n are the number of zeros and ones respectively.
 * - Space complexity: O(m * n).
 */