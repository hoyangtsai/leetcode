/*
 * @lc app=leetcode id=1575 lang=javascript
 *
 * [1575] Count All Possible Routes
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function(locations, start, finish, fuel) {
  const n = locations.length;
  const mod = 10 ** 9 + 7;
  let dp = new Array(n).fill(0).map(() => Array(fuel + 1).fill(0));
  dp[start][0] = 1;
  
  let ans = dp[finish][0];

  for (let currFuel = 1; currFuel <= fuel; currFuel++) {
    for (let to = 0; to < n; to++) {
      for (let from = 0; from < n; from++) {
        if (from == to) continue;
        
        const distBetweenLocations = Math.abs(locations[to] - locations[from]);

        if (distBetweenLocations <= currFuel) {
          const remainFuel = currFuel - distBetweenLocations;
          dp[to][currFuel] = (dp[to][currFuel] + dp[from][remainFuel]) % mod;
        }
      }
    }
    ans = (ans + dp[finish][currFuel]) % mod;
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n^2 * fuel)
 * - Space complexity: O(n * fuel)
 */