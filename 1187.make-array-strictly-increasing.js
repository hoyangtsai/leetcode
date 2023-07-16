/*
 * @lc app=leetcode id=1187 lang=javascript
 *
 * [1187] Make Array Strictly Increasing
 */

/**
 * tags: #binary-search, #bisect-right
 * {@link 1751.maximum-number-of-events-that-can-be-attended-ii.js}
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var makeArrayIncreasing = function(arr1, arr2) {
  function bisectRight(arr, value) {
    let left = 0, right = arr.length;
    while (left < right) {
      let mid = (left + right) >> 1;
      if (arr[mid] <= value) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }

  arr2.sort((a, b) => a - b);

  const dfs = (i, prev) => {
    if (i >= arr1.length) return 0;
    let key = `${i},${prev}`;
    if (key in memo) return memo[key];
    let j = bisectRight(arr2, prev);
    let swap = j < arr2.length ? 1 + dfs(i+1, arr2[j]) : Infinity;
    let noSwap = arr1[i] > prev ? dfs(i+1, arr1[i]) : Infinity;
    return memo[key] = Math.min(swap, noSwap);
  }
  const memo = {};
  const changes = dfs(0, -Infinity);
  return changes === Infinity ? -1 : changes;
};
// @lc code=end


/**
 * - Time complexity: O(m * n * log n).
 * - Space complexity: O(n).
 */