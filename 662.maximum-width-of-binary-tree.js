/*
 * @lc app=leetcode id=662 lang=javascript
 *
 * [662] Maximum Width of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
  let l = [], r = [];
  function dfs( node, depth, index ) {
      if (!node) return;
      l[depth] = l[depth] || index;
      r[depth] = index - l[depth];
      dfs(node.left, depth + 1, index * 2 - 1);
      dfs(node.right, depth + 1, index * 2);
  }
  dfs(root, 0, 0);
  return Math.max(...r) + 1;
};
// @lc code=end

