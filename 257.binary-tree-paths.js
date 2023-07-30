/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
 */

/**
 * tags: #array-binary-tree-path
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (root == null) return [];

  if (root.left == null && root.right == null) {
    return [`${root.val}`];
  } else {
    let left = binaryTreePaths(root.left).map(x => `${root.val}->${x}`);
    let right = binaryTreePaths(root.right).map(x => `${root.val}->${x}`);

    return [...left, ...right];
  }
};
// @lc code=end


/**
 * - Time complexity: O(N)
 * - Space complexity: O(N)
 */