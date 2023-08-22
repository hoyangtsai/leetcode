/*
 * @lc app=leetcode id=2369 lang=javascript
 *
 * [2369] Check if There is a Valid Partition For The Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function(nums) {
  let memo = new Map();

  function prefixIsValid(nums, i) {
    if (memo.has(i)) {
      return memo.get(i)
    }

    let ans = false;
    if (i > 0 && nums[i] == nums[i - 1]) {
      ans |= prefixIsValid(nums, i - 2);
    }
    if (i > 0 && nums[i] == nums[i - 1] && nums[i - 1] == nums[i - 2]) {
      ans |= prefixIsValid(nums, i - 3);
    }
    if (i > 0 && nums[i] == nums[i - 1] + 1 && nums[i - 1] == nums[i - 2] + 1) {
      ans |= prefixIsValid(nums, i - 3);
    }
    memo.set(i, ans);
    return ans;
  }

  const n = nums.length;
  memo.set(-1, true);
  return prefixIsValid(nums, n - 1);
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 */