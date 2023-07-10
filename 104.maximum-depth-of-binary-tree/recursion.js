/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */

/**
 * tags: #binary-tree, #top-100-liked
 * {@link 111.minimum-depth-of-binary-tree/recursion.js}
 * {@link 1302.deepest-leaves-sum/dfs.js}
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
var maxDepth = function(root) {
  if (!root) return 0;
  const leftLeaf = maxDepth(root.left);
  const rightLeaf = maxDepth(root.left);
  return Math.max(leftLeaf, rightLeaf) + 1;
};
// @lc code=end


/**
 * - Time complexity: O(N)
 * - Space complexity: O(log N).
 */