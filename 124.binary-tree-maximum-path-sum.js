/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
 */

// #tree, #deep-first-search, #dfs
// @microsoft, @baidu

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
var maxPathSum = function(root) {
  // set a minimun threshold
  // in case of node.val is a negative number and not children
  let ans = Number.NEGATIVE_INFINITY;
  function getMaxSum(node) {
    if (!node) return 0;
    let left = Math.max(0, getMaxSum(node.left));
    let right = Math.max(0, getMaxSum(node.right));
    ans = Math.max(ans, node.val + left + right);
    return Math.max(0, node.val + left, node.val + right);
  }
  getMaxSum(root);
  return ans;
};
// @lc code=end
