/*
 * @lc app=leetcode id=1458 lang=javascript
 *
 * [1458] Max Dot Product of Two Subsequences
 */

/**
 * tags: #dynamic-programming, #bottom-up-dp
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
  let firstMax = Number.MIN_VALUE;
  let secondMax = Number.MIN_VALUE;
  let firstMin = Number.MAX_VALUE;
  let secondMin = Number.MAX_VALUE;
  
  for (const num of nums1) {
    firstMax = Math.max(firstMax, num);
    firstMin = Math.min(firstMin, num);
  }
  
  for (const num of nums2) {
    secondMax = Math.max(secondMax, num);
    secondMin = Math.min(secondMin, num);
  }

  if (firstMax < 0 && secondMin > 0) {
    return firstMax * secondMin;
  }

  if (firstMin > 0 && secondMax < 0) {
    return firstMin * secondMax;
  }

  const n = nums1.length;
  const m = nums2.length;
  let current = Array(m + 1).fill(Number.MIN_SAFE_INTEGER);
  let previous = Array(m + 1).fill(Number.MIN_SAFE_INTEGER);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      let currProduct = nums1[i - 1] * nums2[j - 1];
      current[j] = Math.max(currProduct, previous[j], current[j - 1], currProduct + Math.max(0, previous[j - 1]));
    }  
    [current, previous] = [previous, current];
  }

  return previous[m];
};
// @lc code=end


/**
 * - Time complexity: O(n * m)
 * - Space complexity: O(m)
 */