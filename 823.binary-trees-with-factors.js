/*
 * @lc app=leetcode id=823 lang=javascript
 *
 * [823] Binary Trees With Factors
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
  const MOD = 1e9 + 7;
  const N = arr.length;
  arr.sort((a, b) => a - b);

  const dp = Array(N).fill(1);

  const index = new Map();
  for (let i = 0; i < N; i++) {
    index.set(arr[i], i) 
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i] % arr[j] === 0) {
        let right = arr[i] / arr[j];
        if (index.has(right)) {
          dp[i] = (dp[i] + dp[j] * dp[index.get(right)]) % MOD;
        }
      }
    }
  }

  let ans = 0;
  for (const x of dp) {
    ans += x;
  }
  return parseInt(ans % MOD);
};
// @lc code=end


/**
 * - Time complexity: O(N^2)
 * - Space complexity: O(N)
 */