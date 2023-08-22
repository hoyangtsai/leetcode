/*
 * @lc app=leetcode id=1615 lang=javascript
 *
 * [1615] Maximal Network Rank
 */

/**
 * tags: #graph, #max-connected-cities
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
  let adj = new Map();
  for (const [a, b] of roads) {
    if (!adj.has(a)) {
      adj.set(a, new Set());
    }
    if (!adj.has(b)) {
      adj.set(b, new Set());
    }
    adj.get(a).add(b);
    adj.get(b).add(a);
  }

  let maxRank = 0;
  for (let node1 = 0; node1 < n; node1++) {
    for (let node2 = node1 + 1; node2 < n; node2++) {
      let currentRank = (adj.get(node1) || new Set()).size +
                        (adj.get(node2) || new Set()).size;
      // has common edges
      if ((adj.get(node1) || new Set()).has(node2)) {
        currentRank--;
      }

      // Find the current pair's respective network rank and store if it's maximum till now.
      maxRank = Math.max(maxRank, currentRank);
    }
  }

  return maxRank;
};
// @lc code=end


/**
 * - Time complexity: O(E + V^2)
 * - Space complexity: O(E)
 */