/*
 * @lc app=leetcode id=129 lang=javascript
 *
 * [129] Sum Root to Leaf Numbers
 */

/**
 * #binary-tree
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
var sumNumbers = function(root) {
  let sum = 0;
  function traverse(node, num) {
    num += node.val;
    if (!node.left && !node.right) sum += parseInt(num);
    if (node.left) traverse(node.left, num)
    if (node.right) traverse(node.right, num);
  }
  traverse(root, '');
  return sum;
};
// @lc code=end


/**
 * - Time complexity: O(H).
 * - Space complexity: O(1).
 */