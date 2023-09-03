/*
 * @lc app=leetcode id=787 lang=javascript
 *
 * [787] Cheapest Flights Within K Stops
 */

/**
 * tags: #dijkstra-algorithm, #priority-queue
 */

const { PriorityQueue } = require('@datastructures-js/priority-queue')
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
  let adj = new Map();
  for (const f of flights) {
    if (adj.has(f[0])) {
      const value = adj.get(f[0]);
      adj.set(f[0], [...value, [f[1], f[2]]]);
    } else {
      adj.set(f[0], [[f[1], f[2]]]);
    }
  }

  let stops = Array(n).fill(Infinity);

  let pq = new PriorityQueue({ compare: (a, b) => a[0] - b[0] });
  // {dist_from_src_node, node, number_of_stops_from_src_node}
  pq.enqueue([0, src, 0]);

  while(!pq.isEmpty()) {
    let temp = pq.dequeue();
    let dist = temp[0];
    let node = temp[1];
    let steps = temp[2];

    // We have already encountered a path with a lower cost and fewer stops,
    // or the number of stops exceeds the limit.
    if (steps > stops[node] || steps > k + 1) continue;

    stops[node] = steps;
    if (node == dst)
      return dist;
    if (!adj.has(node))
      continue;
    for (const a of adj.get(node)) {
      pq.enqueue([dist + a[1], a[0], steps + 1]);
    }
  }

  return -1;
};
// @lc code=end


/**
 * - Time complexity: O((N + E) * K * log(E * K))
 * - Space complexity: O(N + E * K)
 */