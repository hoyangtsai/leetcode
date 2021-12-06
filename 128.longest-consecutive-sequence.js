/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

/**
 * com: #microsoft, #facebook, #google
 * tags: #hash-table
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length === 0) return 0;
  
  // set of unique numbers
  const numSet = new Set(nums);

  let longest = 0;
  for (const num of numSet) {
    // ensure an number from the lowest
    if (numSet.has(num - 1)) continue;

    let current = num;
    let count = 1;
    while (numSet.has(current + 1)) {
      count += 1;
      current += 1;
    }
    longest = Math.max(longest, count);
  }

  return longest;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */
