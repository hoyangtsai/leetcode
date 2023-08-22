/*
 * @lc app=leetcode id=2616 lang=javascript
 *
 * [2616] Minimize the Maximum Difference of Pairs
 */

/**
 * tags: #binary-search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
  function countValidPairs(nums, threshold) {
    let index = 0, count = 0;
    while (index < nums.length - 1) {
      // If a valid pair is found, skip both numbers.
      if (nums[index + 1] - nums[index] <= threshold) {
        count++;
        index++;
      }
      index++;
    }
    return count;
  }

  nums.sort((a, b) => a - b);
  const n = nums.length;
  let left = 0, right = nums[n - 1] - nums[0];

  while (left < right) {
    let mid = parseInt(left + (right - left) / 2);

    // If there are enough pairs, look for a smaller threshold.
    // Otherwise, look for a larger threshold.
    if (countValidPairs(nums, mid) >= p) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  
  return left;
};
// @lc code=end


/**
 * - Time complexity: O(n * log(V))
 * - Space complexity: O(1)
 */