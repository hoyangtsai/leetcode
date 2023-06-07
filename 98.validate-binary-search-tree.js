/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 */

 /**
  * tags: #binary-tree, #validate-tree
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  function validate(node, left, right) {
    if (node === null) return true;
    if (left >= node.val || right <= node.val) return false;
    // node.left < node.val
    // node.right > node.val
    return validate(node.left, left, node.val) && validate(node.right, node.val, right);
  }
  return validate(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};
// @lc code=end
