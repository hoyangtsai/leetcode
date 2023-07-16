/*
 * @lc app=leetcode id=863 lang=javascript
 *
 * [863] All Nodes Distance K in Binary Tree
 */

/**
 * tags: #binary-tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
  let graph = new Map();
  let answer = [];
  let visited = new Set();
  visited.add(target.val);
  
  function buildGraph(cur, parent) {
    if (cur != null && parent != null) {
      if (!graph.has(cur.val)) {
        graph.set(cur.val, [parent.val])
      } else {
        graph.set(cur.val, [...graph.get(cur.val), parent.val])
      }
      if (!graph.has(parent.val)) {
        graph.set(parent.val, [cur.val])
      }  else {
        graph.set(parent.val, [...graph.get(parent.val), cur.val])
      }
    }
    if (cur.left != null) {
      buildGraph(cur.left, cur);
    }
    if (cur.right != null) {
      buildGraph(cur.right, cur);
    }
  }

  function dfs(node, distance, k) {
    if (distance == k) {
      answer.push(node);
      return;
    }

    for (const neighbor of graph.get(node) || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        dfs(neighbor, distance + 1, k);
      }
    }
  }

  buildGraph(root, null);
        
  dfs(target.val, 0, k);
        
  return answer;
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 */