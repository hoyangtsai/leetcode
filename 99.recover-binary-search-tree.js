/*
 * @lc app=leetcode id=99 lang=javascript
 *
 * [99] Recover Binary Search Tree
 */

/**
 * tags: #binary-tree, #depth-first-search
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let x = null, y = null, prev = null;

  function dfs(node) {
    if (node == null) return;
    dfs(node.left);
    if (prev != null && prev.val > node.val) {
      y = node;
      if (x == null) x = prev;
    }
    prev = node;
    dfs(node.right);
  }

  dfs(root);
  [x.val, y.val] = [y.val, x.val];
};
// @lc code=end

