/*
 * @lc app=leetcode id=366 lang=javascript
 *
 * [366] Find Leaves of Binary Tree
 */

// @google, @linkdedin
// #tree, #binary-tree, #DFS

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
 * @return {number[][]}
 */
var findLeaves = function(root) {
  let res = [];

  getHeight(root);

  return res;

  function getHeight(node) {
    if (!node) {
      return -1;
    }

    // first calculate the height of the left and right children
    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);

    const currHeight = Math.max(leftHeight, rightHeight) + 1;

    if (res.length == currHeight) {
      res[currHeight] = [];
    }

    res[currHeight].push(node.val);

    return currHeight;
  }
};
// @lc code=end

