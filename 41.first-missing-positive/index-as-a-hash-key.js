/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */

/**
 * tags: #hash-table
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const n = nums.length;

  // base case
  // check smallest positive 1 is present
  let contains = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] == 1) {
      contains++;
      break;
    }
  }

  if (contains == 0) {
    return 1;
  }

  // replace negative number, zeros and number larger than n by 1s
  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0 || nums[i] > n) {
      nums[i] = 1;
    }
  }

  // use index as a hash key and number sign as a presence detector.
  for (let i = 0; i < n; i++) {
    let a = Math.abs(nums[i]);
    // If you meet number a in the array - change the sign of a-th element.
    // Be careful with duplicates : do it only once.
    if (a == n)
      nums[0] = - Math.abs(nums[0]);
    else
      nums[a] = - Math.abs(nums[a]);
  }

  // Now the index of the first positive number 
  // is equal to first missing positive.
  for (let i = 1; i < n; i++) {
    if (nums[i] > 0)
      return i;
  }

  if (nums[0] > 0)
    return n;

  return n + 1;
};
// @lc code=end


/**
 * Index as a hash key
 * 
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */

firstMissingPositive([3,4,-1,-2,1,5,16,0,2,0])