/*
 * @lc app=leetcode id=871 lang=javascript
 *
 * [871] Minimum Number of Refueling Stops
 */

// @google, @uber
// #dynamic-programming

// @lc code=start
/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
  let dp = new Array(stations.length + 1).fill(0);
  dp[0] = startFuel;
  for (let i = 0; i < stations.length; i++) {
    for (let j = i; j >= 0; j--) {
      // reachable
      if (dp[j] >= stations[i][0]) {
        dp[j + 1] = Math.max(dp[j + 1], dp[j] + stations[i][1]);
      }
    }
  }

  console.log('dp =>', dp);

  for (let i = 0; i <= stations.length; i++) {
    if (dp[i] >= target) return i;
  }
  
  return -1;
};
// @lc code=end


/**
 * Dynamic programming
 * 
 * - Time complexity: O(N^2), where N is the length of stations.
 * - Space complexity: O(N), the space used by dp.
 */


minRefuelStops(100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]]);