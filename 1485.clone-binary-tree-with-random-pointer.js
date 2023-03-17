/*
 * @lc app=leetcode id=1485 lang=javascript
 *
 * [1485] Clone Binary Tree With Random Pointer
 */

// @lc code=start
/**
 * Definition for a Node.
 * function Node(val, left, right, random) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.random = random === undefined ? null : random;
 * };
 */
/**
 * @param {Node} root
 * @return {NodeCopy}
 */
var copyRandomBinaryTree = function(root) {
  if (!root) return null;
  
  const m = new Map();
  function clone (node) {
    if (!node) return null;
    if (m.has(node)) return m.get(node);
    
    const newNode = new NodeCopy(node.val);
    m.set(node, newNode);
    newNode.left = clone(node.left);
    newNode.right = clone(node.right);
    newNode.random = clone(node.random);
    return newNode;
  }
  return clone(root);
};
// @lc code=end
