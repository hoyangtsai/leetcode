/*
 * @lc app=leetcode id=530 lang=javascript
 *
 * [530] Minimum Absolute Difference in BST
 */

/**
 * tags: #binary-tree, #binary-search-tree
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
var getMinimumDifference = function(root) {
  let prevNode = null;
  let minDiff = Number.MAX_VALUE;

  // in-order traverse
  function inorderTraversal(node) {
    if (node == null) return;

    inorderTraversal(node.left);
    if (prevNode) {
      minDiff = Math.min(minDiff, node.val - prevNode.val);
    }
    prevNode = node;
    inorderTraversal(node.right);
  }

  inorderTraversal(root);

  return minDiff;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */