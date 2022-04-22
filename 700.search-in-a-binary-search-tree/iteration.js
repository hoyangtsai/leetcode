/*
 * @lc app=leetcode id=700 lang=javascript
 *
 * [700] Search in a Binary Search Tree
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  while (root != null && val != root.val) {
    root = val < root.val ? root.left : root.right;
  }
  return root;
};
// @lc code=end


/**
 * - Time complexity: O(H).
 * - Space complexity: O(1).
 */