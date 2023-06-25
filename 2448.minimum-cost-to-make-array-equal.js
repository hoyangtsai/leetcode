/*
 * @lc app=leetcode id=2448 lang=javascript
 *
 * [2448] Minimum Cost to Make Array Equal
 */

/**
 * tags: #prefix-sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(nums, cost) {
  const n = nums.length;
  let numsAndCost = Array.from(Array(n).fill(0), () => Array(2).fill(0));
  for (let i = 0; i < n; i++) {
    numsAndCost[i][0] = nums[i];
    numsAndCost[i][1] = cost[i];
  }
  numsAndCost.sort((a, b) => a[0] - b[0]);

  let prefixCost = Array(n);
  prefixCost[0] = BigInt(numsAndCost[0][1]);
  for (let i = 1; i < n; ++i)
    prefixCost[i] = BigInt(numsAndCost[i][1]) + prefixCost[i - 1];

  // Then we try every integer nums[i] and make every element equals nums[i],
  let totalCost = BigInt(0);
  for (let i = 1; i < n; ++i) {
    totalCost += BigInt(numsAndCost[i][1] * (numsAndCost[i][0] - numsAndCost[0][0]));
  }

  let answer = totalCost;

  // Then we try nums[1], nums[2] and so on. The cost difference is made by the change of
  // two parts: 1. prefix sum of costs. 2. suffix sum of costs. 
  // During the iteration, record the minimum cost we have met.
  for (let i = 1; i < n; ++i) {
    let gap = BigInt(numsAndCost[i][0] - numsAndCost[i - 1][0]);
    totalCost += BigInt(prefixCost[i - 1] * gap);
    totalCost -= BigInt((prefixCost[n - 1] - prefixCost[i - 1]) * gap);
    // BigInt cannot be used with methods in the build-in Math Object
    // answer = Math.min(answer, totalCost);
    if (totalCost < answer) answer = totalCost
  }

  return Number(answer);
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */