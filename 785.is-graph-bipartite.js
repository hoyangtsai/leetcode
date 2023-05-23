/*
 * @lc app=leetcode id=785 lang=javascript
 *
 * [785] Is Graph Bipartite?
 */

/**
 * tags: #graph
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  const n = graph.length;
  let color = Array(n).fill(-1);

  for (let start = 0; start < n; ++start) {
    if (color[start] == -1) {
      let stack = [];
      stack.push(start);
      color[start] = 0;

      while (stack.length) {
        const node = stack.pop();
        for (const nei of graph[node]) {
          if (color[nei] == -1) {
            stack.push(nei);
            color[nei] = color[node] ^ 1; // reverse between 0 and 1
          } else if (color[nei] == color[node]) {
            return false;
          }
        }
      }
    }
  }

  return true;
};
// @lc code=end


/**
 * - Time complexity: O(N + E), where N is the number of nodes in the graph, and E is the number of edges.
 * - Space complexity: O(N), the space used to store the color.
 */