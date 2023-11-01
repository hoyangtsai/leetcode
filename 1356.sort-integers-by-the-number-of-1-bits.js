/*
 * @lc app=leetcode id=1356 lang=javascript
 *
 * [1356] Sort Integers by The Number of 1 Bits
 */

/**
 * tags: #bit-manipulation, #bitwise-operation
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
  function findWeight(num) {
    let mask = 1;
    let weight = 0;

    while (num > 0) {
      if ((num & mask) > 0) {
        weight += 1;
        num ^= mask;
      }
      mask <<= 1;
    }

    return weight;
  }

  arr.sort((a, b) => {
    if (findWeight(a) == findWeight(b)) {
      return a - b;
    }  
    return findWeight(a) - findWeight(b);
  });

  return arr;
};
// @lc code=end


/**
 * - Time complexity: O(n * log n)
 * - Space complexity: O(log n), because sorting in js runtime of v8 engine uses the Quick Sort algorithm, which has a space complexity of O(log n) 
 */