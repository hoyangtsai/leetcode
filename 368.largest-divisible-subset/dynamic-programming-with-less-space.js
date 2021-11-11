/*
 * @lc app=leetcode id=368 lang=javascript
 *
 * [368] Largest Divisible Subset
 */

// #dynamic-programming

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  const N = nums.length;

  let dp = Array(N).fill(0);

  nums.sort((a, b) => a - b);

  let maxSubsetSize = -1, maxSubsetIndex = -1;

  for (let i = 0; i < N; i++) {
    let subsetSize = 0;

    // find the largest division subset of previous elements
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] == 0 && subsetSize < dp[j]) {
        subsetSize = dp[j];
      }
    }

    // Extend the found subset with the element itself.
    dp[i] = subsetSize + 1;

    // We reuse this loop to obtain the largest subset size 
    //   in order to prepare for the reconstruction of subset.
    if (maxSubsetSize < dp[i]) {
      maxSubsetSize = dp[i];
      maxSubsetIndex = i;
    }
  }

  /* Reconstruct the largest divisible subset  */
  let subset = [];
  let currSize = maxSubsetSize;
  let currTail = nums[maxSubsetIndex];
  for (let i = maxSubsetIndex; i >= 0; i--) {
    if (currSize == 0) break;

    if (currTail % nums[i] == 0 && currSize == dp[i]) {
      subset.unshift(nums[i]);
      currTail = nums[i];
      currSize -= 1;
    }
  }

  return subset;
};
// @lc code=end


/**
 * - Time complexity: O(N^2).
 * - Space complexity: O(N).
 */
