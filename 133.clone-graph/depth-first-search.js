/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */

/**
 * tags: #graph, #clone, #depth-first-search
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if (!node) return null;

  let clone = new Map();
  function dfs(node) {
    // if (!clone.has(node.val)) {
    //   clone.set(node.val, new Node(node.val));
    //   clone.get(node.val).neighbors = node.neighbors.map(dfs);
    // }
    // return clone.get(node.val);

    if (clone.has(node.val)) {
      return clone.get(node.val);
    }

    const cloneNode = new Node(node.val);
    clone.set(node.val, cloneNode);

    cloneNode.neighbors = node.neighbors.map(dfs);

    // for (const neighbor of node.neighbors) {
    //   cloneNode.neighbors.push(dfs(neighbor));
    // }

    return cloneNode;
  }

  return dfs(node);
};
// @lc code=end


/**
 * - Time complexity: O(N + M), where N is the number of nodes (vertices) and M is a number of edges.
 * - Space complexity: O(N).
 *   This is occupied by the hash map and in addition to that, space would also be occupied by the recursion stack since we are adopting a recursive approach here. 
 *   The space occupied by the recursion stack would be equal to O(H) where H is the height of the graph.
 *   Overall, the space complexity would be O(N).
 */