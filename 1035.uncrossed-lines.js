/*
 * @lc app=leetcode id=1035 lang=javascript
 *
 * [1035] Uncrossed Lines
 */

/**
 * tags: #dynamic-programming, #string-subsequence, #two-string-calculation
 * {@link 1143.longest-common-subsequence.js}
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
  const m = nums1.length, n = nums2.length;

  if (m < n) return maxUncrossedLines(nums2, nums1);

  let previous = Array(n + 1).fill(0);
  let current = Array(n + 1).fill(0);

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (nums1[i - 1] == nums2[j - 1]) {
        current[j] = 1 + previous[j - 1];
      } else {
        current[j] = Math.max(previous[j], current[j - 1]);
      }
    }
    [previous, current] = [current, previous];
  }

  return previous[n];
};
// @lc code=end


/**
 * Time complexity: O(M * N).
 * Space complexity: O(min(M, N)).
 */