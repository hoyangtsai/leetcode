/*
 * @lc app=leetcode id=951 lang=javascript
 *
 * [951] Flip Equivalent Binary Trees
 */

/**
 * tags: #tree, #binary-tree
 * #google-interview
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
  if (root1 == null && root2 == null) return true;

  if (root1 == null || root2 == null || root1.val != root2.val) return false;

  const regular = flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right);
  const flipped = flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);
  return regular || flipped;
};
// @lc code=end


/**
 * Recursion
 * 
 * - Time complexity: O(min(N1,N2)), where N1, N2 are the lengths of root1 and root2.
 * - Space complexity: O(min(H1,H2)), where H1, H2 are the heights of the trees of root1 and root2.
 */
