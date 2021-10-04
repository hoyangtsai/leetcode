/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 */

 // #tree, #depth-first-search
 // @amazon, @bloomberg, @facebook, @microsoft

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
  function validate(node, minVal, maxVal) {
    if (node === null) return true;
    if (minVal >= node.val || maxVal <= node.val) return false;
    // node.left < node.val
    // node.right > node.val
    return validate(node.left, minVal, node.val) && validate(node.right, node.val, maxVal);
  }
  return validate(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};
// @lc code=end
