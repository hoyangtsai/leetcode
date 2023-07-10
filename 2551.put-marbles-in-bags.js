/*
 * @lc app=leetcode id=2551 lang=javascript
 *
 * [2551] Put Marbles in Bags
 */

/**
 * tags: #greedy
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function(weights, k) {
  const n = weights.length;

  let pairWeights = Array(n - 1).fill(0);
  for (let i = 0; i < n - 1; i++) {
    pairWeights[i] += weights[i] + weights[i + 1];
  }

  pairWeights.sort((a, b) => a - b);

  let answer = 0;
  for (let i = 0; i < k - 1; i++) {
    answer += pairWeights[n - 2 - i] - pairWeights[i];
  }

  return answer;
};
// @lc code=end

