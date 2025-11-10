/*
 * @lc app=leetcode id=1488 lang=javascript
 *
 * [1488] Avoid Flood in The City
 */

/**
 * tags: #array, #hash-table, #binary-search, #greedy
 */

// @lc code=start
/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function(rains) {
  const n = rains.length;
  const res = Array(n).fill(1);
  const lakeMap = new Map(); // lake -> last rain day
  const dryDays = []; // sorted array of dry days

  for (let i = 0; i < n; i++) {
    const lake = rains[i];
    if (lake === 0) {
      dryDays.push(i);
      continue;
    }

    // It rains on a lake
    if (lakeMap.has(lake)) {
      const lastRainDay = lakeMap.get(lake);
      // Find a dry day after the last rain day
      const dryDayIndex = binarySearch(dryDays, lastRainDay);
      if (dryDayIndex === -1) {
        return [];
      }
      const dryDay = dryDays[dryDayIndex];
      res[dryDay] = lake; // Dry this lake on the found dry day
      dryDays.splice(dryDayIndex, 1);
    }
    lakeMap.set(lake, i);
    res[i] = -1; // It rains on this day
  }

  return res;

  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] > target) {
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

