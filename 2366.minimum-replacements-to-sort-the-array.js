/*
 * @lc app=leetcode id=2366 lang=javascript
 *
 * [2366] Minimum Replacements to Sort the Array
 */

/**
 * tags: #greedy
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumReplacement = function(nums) {
  let ans = 0;
  const n = nums.length;

  // Start from the second last element, as the last one is always sorted.
  for (let i = n - 2; i >= 0; i--) {
    // No need to break if they are already in order.
    if (nums[i] <= nums[i + 1]) continue;

    // Count how many elements are made from breaking nums[i].
    let numElements = parseInt((nums[i] + nums[i + 1] - 1) / nums[i + 1]);

    // It requires numElements - 1 replacement operations.
    ans += numElements - 1;

    // Maximize nums[i] after replacement.
    nums[i] = parseInt(nums[i] / numElements);
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(1)
 */