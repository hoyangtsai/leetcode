/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */

/**
 * tags: #graph, #breadth-first-search
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
  if (!node) return node;

  let clone = new Map();
  let queue = [node];
  clone.set(node.val, new Node(node.val));

  while (queue.length > 0) {
    const n = queue.shift();

    for (const neighbor of n.neighbors) {
      if (!clone.has(neighbor.val)) {
        clone.set(neighbor.val, new Node(neighbor.val));
        queue.push(neighbor);
      }
      clone.get(n.val).neighbors.push(clone.get(neighbor.val));
    }
  }

  return clone.get(node.val);
};
// @lc code=end


/**
 * - Time complexity: O(N + M), where N is the number of nodes (vertices) and M is a number of edges.
 * - Space complexity: O(N).
 *   This is occupied by the hash map and in addition to that, space would also be occupied by the recursion stack since we are adopting a recursive approach here. 
 *   The space occupied by the recursion stack would be equal to O(H) where H is the height of the graph.
 *   Overall, the space complexity would be O(N).
 */