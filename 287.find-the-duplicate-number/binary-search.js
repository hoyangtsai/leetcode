/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @microsoft, @google, @adobe
// #array, #binary-search

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let low = 1, high = nums.length - 1;
  let duplicate = -1;

  while(low <= high) {
    let cur = ~~((low + high) / 2);

    let count = 0;
    for (const n of nums) {
      if (n <= cur) {
        count ++;
      }
    }

    if (count > cur) {
      duplicate = cur;
      high = cur - 1;
    } else {
      low = cur + 1;
    }
  }

  return duplicate;
};
// @lc code=end

/**
 * Binary search
 * 
 * - Time complexity: O(n log n).
 * - Space complexity: O(1).
 */