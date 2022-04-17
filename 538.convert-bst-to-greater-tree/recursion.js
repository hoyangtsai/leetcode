/*
 * @lc app=leetcode id=538 lang=javascript
 *
 * [538] Convert BST to Greater Tree
 */

/**
 * tags: #binary-tree
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
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let sum = 0;
  function dfs(root) {
    if (root != null) {
      dfs(root.right);
      sum += root.val;
      root.val = sum;
      dfs(root.left);
    }
    return root;
  }
  return dfs(root);
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 */