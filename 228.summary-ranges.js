/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

/**
 * tags: #array-sequence-numbers
 * {@link 163.missing-ranges.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let ranges = [];
  for (let i = 0; i < nums.length; i++) {
    let start = nums[i];
    
    // Keep iterating until the next element is one more than the current element.
    while (i + 1 < nums.length && nums[i] + 1 == nums[i + 1]) {
      i++;
    }

    if (start != nums[i]) {
      ranges.push(start + "->" + nums[i]);
    } else {
      ranges.push(start.toString());
    }
  }

  return ranges;
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(1)
 */
