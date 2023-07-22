/*
 * @lc app=leetcode id=787 lang=javascript
 *
 * [787] Cheapest Flights Within K Stops
 */

/**
 * tags: #bellman-fold, #direction-graph
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
  let dist = Array(n).fill(Infinity);
  dist[src] = 0;

  for (let i = 0; i <= k; i++) {
    let temp = dist.slice();
    for (const flight of flights) {
      if (dist[flight[0]] != Infinity) {
        temp[flight[1]] = Math.min(temp[flight[1]], dist[flight[0]] + flight[2]);
      }
    }
    // Copy the temp vector into dist.
    dist = temp;
  }

  return dist[dst] == Infinity ? -1 : dist[dst];
};
// @lc code=end


/**
 * - Time complexity: O((N + E) * K)
 * - Space complexity: O(N)
 */