/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @amazon, @apple, @facebook, @microsoft, @google, @uber
// #aray, #two-pointers
// #google-interview

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let results = [];

  if (nums.length < 3) return results;

  // sort from min to max
  nums = nums.sort((a, b) => a - b);
  
  for (i = 0; i < nums.length - 2;) {
    // we don't want repeats, so skip numbers we've already seen
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (j = i + 1, k = nums.length - 1; j < k;) {
      let sum = nums[i] + nums[j] + nums[k];
      let solution = [nums[i], nums[j], nums[k]];
      if (sum === 0) {
        results.push(solution);
        let valj = nums[j];
        let valk = nums[k];
        while (nums[j] === valj) {
          j++;
        }
        while (nums[k] === valk) {
          k--;
        }
      } else if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      }
    }
    let vali = nums[i];
    while (nums[i] === vali) {
      i++;
    }
  }
  return results;
};
// @lc code=end

/**
 * Two-pointers
 * 
 * - Time complexity: O(n^2). twoSumII is O(n), and we call it n times.
 *   Sorting the array takes O(n log n). so overall complexity is O(n log n + n^2).
 *   This is asymptotically equivalent is O(n^2).
 * 
 * - Space complexity: from O(log n) to O(n), depending on the implementation of the sorting algorithm.
 */