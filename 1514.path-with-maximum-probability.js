/*
 * @lc app=leetcode id=1514 lang=javascript
 *
 * [1514] Path with Maximum Probability
 */

/**
 * tags: #priority-queue, #dijkstra-algorithm
 * {@link 1631.path-with-minimum-effort/dijkstra-algorithm.js}
 */

// @lc code=start
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue')
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start, end) {
  const MIN = Number.MIN_SAFE_INTEGER;
  const m = edges.length;

  const adjList = {};
  const dists = new Array(n).fill(MIN);

  for (let i = 0; i < n; i++) {
    adjList[i] = [];
  }

  for (let i = 0; i < m; i++) {
    const [u, v] = edges[i];
    const weight = succProb[i];

    adjList[u].push([v, weight]);
    adjList[v].push([u, weight]);
  }

  const maxHeap = new MaxPriorityQueue({ priority: x => x[1] });

  maxHeap.enqueue([start, 1]);

  while (!maxHeap.isEmpty()) {
    const [node, prob] = maxHeap.dequeue().element;

    if (node === end) return prob;
    if (dists[node] > prob) continue;

    for (const [nei, weight] of adjList[node]) {
      if (prob * weight > dists[nei]) {
        dists[nei] = prob * weight;
        maxHeap.enqueue([nei, dists[nei]]);
      }
    }
  }

  return 0;
};
// @lc code=end


/**
 * - Time complexity: O(m + n * log N)
 * - Space complexity: O(n + m)
 */


console.log(maxProbability(3, [[0,1],[1,2],[0,2]], [0.5,0.5,0.3], 0, 2))