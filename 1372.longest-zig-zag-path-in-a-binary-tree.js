/*
 * @lc app=leetcode id=1372 lang=javascript
 *
 * [1372] Longest ZigZag Path in a Binary Tree
 */

/**
 * tags: #binary-tree, #longest-tree
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
var longestZigZag = function(root) {
  let longestLen = 0;

  function dfs(node, goLeft, depth) {
    if (!node) return;

    longestLen = Math.max(longestLen, depth);

    if (goLeft) {
      dfs(node.left, false, depth + 1);
      dfs(node.right, true, 1);
    } else {
      dfs(node.left, false, 1);
      dfs(node.right, true, depth + 1);
    }
  }

  dfs(root, false, 0);
  dfs(root, true, 0);
  return longestLen;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */