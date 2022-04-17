/*
 * @lc app=leetcode id=538 lang=javascript
 *
 * [538] Convert BST to Greater Tree
 */

/**
 * tags: #iteration, #BFS
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
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let sum = 0;
  let node = root;
  let stack = [];
  while (stack.length > 0 || node != null) {
    // push all nodes up to (and including) this subtree's maximum on the stack.
    while (node != null) {
      stack.push(node);
      node = node.right;
    }

    node = stack.pop();
    sum += node.val;
    node.val = sum;

    // all nodes with values between the current and its parent lie in the left subtree.
    node = node.left;
  }
  
  return root;
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 */