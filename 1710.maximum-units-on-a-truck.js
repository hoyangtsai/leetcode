/*
 * @lc app=leetcode id=1710 lang=javascript
 *
 * [1710] Maximum Units on a Truck
 */

/**
 * tags: #greedy
 */

// @lc code=start
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
  // descending
  boxTypes.sort((a, b) => b[1] - a[1]);

  let unitCount = 0;
  for (const boxType of boxTypes) {
    let boxCount = Math.min(truckSize, boxType[0]);
    unitCount += boxCount * boxType[1];
    truckSize -= boxCount;
    if (truckSize == 0) break;
  }

  return unitCount;
};
// @lc code=end


/**
 * - Time complexity: O(n log n).
 * - Space complexity: O(1).
 */