/*
 * @lc app=leetcode id=1502 lang=javascript
 *
 * [1502] Can Make Arithmetic Progression From Sequence
 */

/**
 * tags: #math, #number-sequence
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);

  const n = arr.length;

  if (maxValue - minValue === 0) return true;
  
  if ((maxValue - minValue) % (n - 1) != 0) {
    return false;
  }

  const diff = (maxValue - minValue) / (n - 1);
  let numberSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] - minValue) % diff != 0) {
      return false;
    }
    numberSet.add(arr[i]);
  }

  return numberSet.size === n;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */