/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
 */

/**
 * com: #facebook
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (root == null || root == p || root == q) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left == null && right == null) return null;
  if (left != null && right != null) return root;
  return left == null ? right : left;
};
// @lc code=end

/**
 * - Time complexity: O(N).
 * - Space complexity: O(N).
 */

// https://www.youtube.com/watch?v=13m9ZCB8gjw