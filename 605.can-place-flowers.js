/*
 * @lc app=leetcode id=605 lang=javascript
 *
 * [605] Can Place Flowers
 */

/**
 * tags: #greedy, #array-of-digits, #plant-flowers
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    // Check if the current plot is empty.
    if (flowerbed[i] == 0) {
      // Check if the left and right plots are empty.
      let emptyLeftPlot = (i == 0) || (flowerbed[i - 1] == 0);
      let emptyRightPlot = (i == flowerbed.length - 1) || (flowerbed[i + 1] == 0);

      // If both plots are empty, we can plant a flower here.
      if (emptyLeftPlot && emptyRightPlot) {
        flowerbed[i] = 1;
        count++;
        // return earlier if matched criteria for optimization
        if (count >= n) {
          return true;
        }
      }
    }
  }

  return count >= n;
};
// @lc code=end


/**
 * Single scan
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */