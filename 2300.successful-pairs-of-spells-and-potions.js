/*
 * @lc app=leetcode id=2300 lang=javascript
 *
 * [2300] Successful Pairs of Spells and Potions
 */

/**
 * tags: #array, #binary-search, #sorting, #two-pointers
 */

// @lc code=start
/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  const m = spells.length;
  const n = potions.length;
  const res = Array(m).fill(0);
  potions.sort((a, b) => a - b);

  for (let i = 0; i < m; i++) {
    const spell = spells[i];
    const target = Math.ceil(success / spell);
    const index = binarySearch(potions, target);
    if (index !== -1) {
      res[i] = n - index;
    }
  }

  return res;

  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] >= target) {
        result = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return result;
  }
};
// @lc code=end

