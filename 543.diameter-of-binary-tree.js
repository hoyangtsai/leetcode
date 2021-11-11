/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
 */

// @facebook, @amazon, @microsoft, @google
// #depth-first-search, #binary-tree
// #google-interview

/** 
 * {@link maxPathSum|124.binary-tree-maximum-path-sum.js}
 * {@link longestUnivaluePath|687.longest-univalue-path.js}
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

    dfs(root);

    function dfs(node) {
      if (!node) return 0;

      const left = dfs(node.left);
      const right = dfs(node.right);

      diameter = Math.max(diameter, left + right);

      return 1 + Math.max(left, right);
    }

    return diameter;
};
// @lc code=end

/**
 * Depth-first Search
 * 
 * Let N be the number of nodes in the tree.
 * 
 * - Time complexity:O(N).
 * - Sapce complexity:O(N).
 */