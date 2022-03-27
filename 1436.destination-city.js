/*
 * @lc app=leetcode id=1436 lang=javascript
 *
 * [1436] Destination City
 */

/**
 * tags: #hash-table
 * {@link 332.reconstruct-itinerary.js}
 */

// @lc code=start
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
  // Using Map
  // const hash = new Map(paths);

  // for (const to of hash.values()) {
  //   if (!hash.has(to)) return to;
  // }

  const set = new Set();
  for (const path of paths) {
    set.add(path[0]);
  }
  for (const path of paths) {
    if (!set.has(path[1])) return path[1];
  }
};
// @lc code=end

