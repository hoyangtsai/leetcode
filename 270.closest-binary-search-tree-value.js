/*
 * @lc app=leetcode id=270 lang=javascript
 *
 * [270] Closest Binary Search Tree Value
 */

// @facebook
// #binary-search, #tree

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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
  let closestDiff = Infinity;
  let closestVal = Infinity;

  const search = (node) => {
    if (!node) return;

    if (Math.abs(node.val - target) < closestDiff) {
      closestDiff = Math.abs(node.val - target);
      closestVal = node.val;
    }

    // root.right < root.val < root.left
    // if not, search both nodes
    if (target > node.val) {
      search(node.right);
    } else {
      search(node.left);
    }
  }

  search(root);

  return closestVal;
};
// @lc code=end

