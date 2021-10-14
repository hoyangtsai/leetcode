/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @microsoft, @google, @adobe
// #array, #binary-search, #two-pointers, #floyds-tortoise-and-hare
// &141, &142

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  // Find the intersection point of the two runners.
  let tortoise = nums[0];
  let hare = nums[0];

  do {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
  } while (tortoise != hare);

  // Find the "entrance" to the cycle.
  tortoise = nums[0];

  while (tortoise != hare) {
    tortoise = nums[tortoise];
    hare = nums[hare];
  }

  return hare;
};
// @lc code=end

/**
 * Floyd's Tortoise and Hare 
 * 
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */