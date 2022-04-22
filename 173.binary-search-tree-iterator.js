/*
 * @lc app=leetcode id=173 lang=javascript
 *
 * [173] Binary Search Tree Iterator
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
 */
var BSTIterator = function(root) {
  this.nodeSorted = [];
  this._index = -1;

  const _inorder = (node) => {
    if (node == null) return;

    _inorder(node.left);
    this.nodeSorted.push(node.val);
    _inorder(node.right);
  }

  _inorder(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  return this.nodeSorted[++this._index];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this._index + 1 < this.nodeSorted.length;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

