/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
 */

/**
 * tags: #binary-tree
 * {@link 104.maximum-depth-of-binary-tree/recursion.js}
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
var minDepth = function(root) {
  if (!root) return 0;

  // If only one of child is non-null, then go into that recursion.
  if (root.left == null) {
    return 1 + minDepth(root.right);
  } else if (root.right == null) {
    return 1 + minDepth(root.left);
  }

  return 1 + Math.min(minDepth(root.left), minDepth(root.right))
};
// @lc code=end


/**
 * - Time complexity: O(N)
 * - Space complexity: O(N)
 */