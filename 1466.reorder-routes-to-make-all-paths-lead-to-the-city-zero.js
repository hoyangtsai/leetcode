/*
 * @lc app=leetcode id=1466 lang=javascript
 *
 * [1466] Reorder Routes to Make All Paths Lead to the City Zero
 */

/**
 * tags: #depth-first-search
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
  let count = 0;
  function dfs(node, parent, adj) {
    for (const [child, sign] of adj[node]) {
      if (child != parent) {
        count += sign;
        dfs(child, node, adj);
      }
    }
  }

  let adj = Array.from(new Array(n), () => []);
  for (const [orig, dest] of connections) {
    adj[orig].push([dest, 1]);
    adj[dest].push([orig, 0]);
  }

  dfs(0, -1, adj);

  return count;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */