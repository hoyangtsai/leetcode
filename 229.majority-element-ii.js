/*
 * @lc app=leetcode id=229 lang=javascript
 *
 * [229] Majority Element II
 */

/**
 * tags: #boyer-moore-voting-algorithm, #majority-element
 * {@link 169.majority-element.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  // first pass
  let count1 = 0, count2 = 0;
  let candidate1 = null, candidate2 = null;

  for (const n of nums) {
    if (n == candidate1) {
      count1++;
    } else if (n == candidate2) {
      count2++;
    } else if (count1 == 0) {
      candidate1 = n;
      count1++;
    } else if (count2 == 0) {
      candidate2 = n;
      count2++;
    } else {
      count1--;
      count2--;
    }
  }

  // second pass
  let res = [];

  count1 = 0;
  count2 = 0;

  for (const n of nums) {
    if (n == candidate1) count1++;
    if (n == candidate2) count2++;
  }

  const n = nums.length;
  if (count1 > n / 3) res.push(candidate1);
  if (count2 > n / 3) res.push(candidate2);

  return res;
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(1)
 */