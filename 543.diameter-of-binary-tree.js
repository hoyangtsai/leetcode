/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
 */

/** 
 * tags: #binary-tree, #tree-longest-depth
 * #google-interview
 * {@link 124.binary-tree-maximum-path-sum.js}
 * {@link 687.longest-univalue-path.js}
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
var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    function dfs(node) {
      if (!node) return 0;

      const left = dfs(node.left);
      const right = dfs(node.right);

      diameter = Math.max(diameter, left + right);

      return 1 + Math.max(left, right);
    }

    dfs(root);
    return diameter;
};
// @lc code=end


/**
 * Let N be the number of nodes in the tree.
 * - Time complexity:O(N).
 * - Space complexity:O(N).
 */