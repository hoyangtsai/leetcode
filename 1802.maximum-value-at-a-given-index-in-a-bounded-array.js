/*
 * @lc app=leetcode id=1802 lang=javascript
 *
 * [1802] Maximum Value at a Given Index in a Bounded Array
 */

/**
 * tags: #binary-search
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {
  function getSum(index, value, n) {
    let count = 0;
    // On index's left:
    // If value > index, there are index + 1 numbers in the arithmetic sequence:
    // [value - index, ..., value - 1, value].
    // Otherwise, there are value numbers in the arithmetic sequence:
    // [1, 2, ..., value - 1, value], plus a sequence of length (index - value + 1) of 1s. 
    if (value > index) {
      count += parseInt((value + value - index) * (index + 1) / 2);
    } else {
      count += parseInt((value + 1) * value / 2) + index - value + 1;
    }

    // On index's right:
    // If value >= n - index, there are n - index numbers in the arithmetic sequence:
    // [value, value - 1, ..., value - n + 1 + index].
    // Otherwise, there are value numbers in the arithmetic sequence:
    // [value, value - 1, ..., 1], plus a sequence of length (n - index - value) of 1s. 
    if (value >= n - index) {
      count += parseInt((value + value - n + 1 + index) * (n - index) / 2);
    } else {
      count += parseInt((value + 1) * value / 2) + n - index - value;
    }   
      
    return count - value;
  }

  let left = 1, right = maxSum;
  while (left < right) {
    let mid = parseInt((left + right + 1) / 2);
    if (getSum(index, mid, n) <= maxSum) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
// @lc code=end


/**
 * - Time complexity: O(log(maxSum)).
 * - Space complexity: O(1).
 */