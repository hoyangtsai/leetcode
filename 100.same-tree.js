/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (p === null && q === null) return true;

  if (p !== null && q !== null && p.val === q.val) {
    if (p.left === null && q.left !== null) return false;
    if (p.left !== null && q.left === null) return false;
    if (p.right === null && q.right !== null) return false;
    if (p.right !== null && q.right === null) return false;

    let leftSame = true;
    let rightSame = true;

    if (p.left !== null && q.left !== null) {
      leftSame = isSameTree(p.left, q.left);
    }

    if (p.right !== null && q.right !== null) {
      rightSame = isSameTree(p.right, q.right);
    }

    return leftSame && rightSame;
  } else {
    return false;
  }
};
// @lc code=end

