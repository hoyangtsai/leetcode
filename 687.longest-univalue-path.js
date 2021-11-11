/*
 * @lc app=leetcode id=687 lang=javascript
 *
 * [687] Longest Univalue Path
 */

// @google
// #depth-first-search, #binary-tree

/**
 * {@link maxPathSum|124.binary-tree-maximum-path-sum.js}
 * {@link diameterOfBinaryTree|543.diameter-of-binary-tree.js}
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
var longestUnivaluePath = function(root) {
  if (!root) return 0;

  function dfs(node) {
    if (!node.left && !node.right) {
      return 0;
    }

    let leftSize = node.left != null ? dfs(node.left) + 1 : 0;
    let rightSize = node.right != null ? dfs(node.right) + 1 : 0;

    // pre-check next value is equal to current node value, if not reassign leftSize to 0
    if (leftSize > 0 && node.left.val != node.val) {
      leftSize = 0;
    }
    if (rightSize > 0 && node.right.val != node.val) {
      rightSize = 0;
    }
    max = Math.max(max, leftSize + rightSize);
    return Math.max(leftSize, rightSize);
  }

  let max = 0;
  dfs(root);
  return max;
};
// @lc code=end

