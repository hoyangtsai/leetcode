/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
 */

// @amazon, @facebook
// #tree, #inorder

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
  (function inorder(node, arr) {
    if (nums.length != k) { //no need to keep going after reach k-th number
      if (node.left) inorder(node.left); //go left first
      nums.push(node.val); //finished going left, now start adding values
      if (node.right) inorder(node.right); //if have right, go there and repeat process
    }
  })(root);
  return nums[k - 1];
};
// @lc code=end


// [1,null,2]\n2