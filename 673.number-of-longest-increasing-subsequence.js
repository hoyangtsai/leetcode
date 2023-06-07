/*
 * @lc app=leetcode id=673 lang=javascript
 *
 * [673] Number of Longest Increasing Subsequence
 */

/**
 * tags: #dynamic-programming, #longest-subsequence, #array-number-increasing-sequence
 * {@link 300.longest-increasing-subsequence/dynamic-programming.js}
 * {@link 549.binary-tree-longest-consecutive-sequence-ii.js}
 * 1. any subsequences are acceptable
 * 2. but we only want longest subsequences which can be multiple
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  const n = nums.length;

  if (n == 1) return n;

  const len = Array(n).fill(1);
  const count = Array(n).fill(1);

  let maxLen = 0;
  let res = 0;

  for (let j = 1; j < n; j++) {
    for (let i = 0; i < j; i++) {
      if (nums[j] > nums[i]) {
        if (len[j] == len[i] + 1) {
          count[j] += count[i];
        }
        if (len[j] < len[i] + 1) {
          len[j] = len[i] + 1;
          count[j] = count[i];
        }
      }
    }
    // maxLen = Math.max(maxLen, len[j]);
  }

  for (let i = 0; i < n; i++) {
    maxLen = Math.max(maxLen, len[i]);
  }

  for (let i = 0; i < n; i++) {
    if (len[i] == maxLen) {
      res += count[i];
    }
  }

  return res;
};
// @lc code=end


/**
 * Time complexity: O(n^2).
 * Space complexity: O(n).
 */

findNumberOfLIS([1, 3, 5, 4, 7]);
findNumberOfLIS([2, 2, 2, 2, 2]);