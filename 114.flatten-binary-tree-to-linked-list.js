/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
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
var flatten = function(root) {
  function flattenTree(node) {
    if (node == null) return null;

    // For a leaf node, we simply return the
    // node as is.
    if (node.left == null && node.right == null) {
      return node;
    }

    //Recursively flatten the left subtree
    let leftTail = flattenTree(node.left);

    // Recursively flatten the right subtree
    let rightTail = flattenTree(node.right);

    if (leftTail != null) {
      leftTail.right = node.right;
      node.right = node.left;
      node.left = null;
    }

    return rightTail == null ? leftTail : rightTail;
  }

  flattenTree(root);
};
// @lc code=end

