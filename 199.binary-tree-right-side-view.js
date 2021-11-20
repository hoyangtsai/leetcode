/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  let rightSide = [];

  function traverse(node, level) {
    if (level == rightSide.length) {
      rightSide.push(node.val);
    }

    if (node.right) traverse(node.right, level + 1);
    if (node.left) traverse(node.left, level + 1);
  }

  if (root == null) return rightSide;

  traverse(root, 0);
  return rightSide;
};
// @lc code=end

