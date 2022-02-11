/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
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
    if (!clone.has(node.val)) {
      clone.set(node.val, new Node(node.val));
      clone.get(node.val).neighbors = node.neighbors.map(dfs);
    }
    return clone.get(node.val);
  }

  return dfs(node);
};
// @lc code=end

