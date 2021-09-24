/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// #array, #divide-and-conquer, #dynamic-programming
// @linkedin, @amazon, @microsoft, @apple, @adobe, @google, @bloomberg, @facebook

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let numsArray = nums;

  const findBestSubarray = (left, right) => {
    if (left > right) {
      return Number.MIN_VALUE;
    }

    let mid = Math.ceil((left + right) / 2);

    let curr = 0;
    let bestLeftSum = 0;
    let bestRightSum = 0;

    // Iterate from the middle to the beginning.
    for (let i = mid - 1; i >= left; i--) {
      curr += numsArray[i];
      bestLeftSum = Math.max(bestLeftSum, curr);
    }
    
    // Reset curr and iterate from the middle to the end.
    curr = 0;
    for (let i = mid + 1; i <= right; i++) {
      curr += numsArray[i];
      bestRightSum = Math.max(bestRightSum, curr);
    }

    // The bestCombinedSum uses the middle element and the best
    // possible sum from each half.
    let bestCombinedSum = numsArray[mid] + bestLeftSum + bestRightSum;

     // Find the best subarray possible from both halves.
    let leftHalf = findBestSubarray(left, mid - 1);
    let rightHalf = findBestSubarray(mid + 1, right);

    // The largest of the 3 is the answer for any given input array.
    return Math.max(bestCombinedSum, Math.max(leftHalf, rightHalf));
  };

  return findBestSubarray(0, numsArray.length - 1);
};
// @lc code=end

/**
 * Divide and Conquer (Advance)
 * Time complexity: O(N log n).
 * Space complexity: O(log n).
 */
