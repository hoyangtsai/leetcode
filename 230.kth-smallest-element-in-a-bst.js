/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let nums = [];

  function inorder(node) {
    if (nums.length != k) {
      if (node.left) inorder(node.left); //go left first
      nums.push(node.val); //finished going left, now start adding values
      if (node.right) inorder(node.right); //if have right, go there and repeat process
    }
  }

  inorder(root);
  return nums[k - 1];
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */