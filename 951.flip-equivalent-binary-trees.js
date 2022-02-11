/*
 * @lc app=leetcode id=951 lang=javascript
 *
 * [951] Flip Equivalent Binary Trees
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
  let vals1 = [];
  let vals2 = [];
  dfs(root1, vals1);
  dfs(root2, vals2);

  function dfs(node, vals) {
    if (node != null) {
      vals.push(node.val);

      let L = node.left != null ? node.left.val : - 1;
      let R = node.right != null ? node.right.val : - 1;

      if (L < R) {
        dfs(node.left, vals);
        dfs(node.right, vals);
      } else {
        dfs(node.right, vals);
        dfs(node.left, vals);
      }

      vals.push(null);
    }
  }

  return JSON.stringify(vals1) === JSON.stringify(vals2);
};
// @lc code=end

