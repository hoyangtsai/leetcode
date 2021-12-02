/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */

/**
 * com: #amazon, #ebay
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length == 1) return nums[0];

  // like even and odd
  let max1 = robSimple(nums, 0, nums.length - 2);
  let max2 = robSimple(nums, 1, nums.length - 1);

  function robSimple(nums, start, end) {
    let t1 = 0;
    let t2 = 0;

    for (let i = start; i <= end; i++) {
      let temp = t1;
      let current = nums[i];
      t1 = Math.max(t2 + current, t1);
      t2 = temp;
    }

    return t1;
  }

  return Math.max(max1, max2);
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(1), since we are not consuming additional space other than two previous results and a temporary variable to hold one of the previous results. 
 */