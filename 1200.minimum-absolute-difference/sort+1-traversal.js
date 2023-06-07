/*
 * @lc app=leetcode id=1200 lang=javascript
 *
 * [1200] Minimum Absolute Difference
 */

/**
 * tags: #array-number-pair
 * {@link 532.k-diff-pairs-in-an-array/two-pointers.js}
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  arr.sort((a, b) => a - b);

  let minPairDiff = Number.MAX_VALUE;
  let ans = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let currPairDiff = arr[i + 1] - arr[i];

    if (currPairDiff === minPairDiff) {
      ans.push([arr[i], arr[i + 1]]);
    } else if (currPairDiff < minPairDiff) {
      ans = [[arr[i], arr[i + 1]]]; // reset the answer
      minPairDiff = currPairDiff;
    }
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n * log(n)).
 * - Space complexity: O(n).
 */