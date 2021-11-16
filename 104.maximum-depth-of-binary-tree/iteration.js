/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
var maxDepth = function(root) {
  let stack = [];
  let depths = [];

  if (!root) return 0;

  stack.push(root);
  depths.push(1);

  let depth = 0, currentDepth = 0;
  while (stack.length > 0) {
    root = stack.shift();
    currentDepth = depths.shift();

    if (root != null) {
      depth = Math.max(depth, currentDepth);
      stack.push(root.left);
      stack.push(root.right);
      depths.push(currentDepth + 1);
      depths.push(currentDepth + 1);
    }
  }

  return depth;
};
// @lc code=end


/**
 * - Time complexity: O(N)
 * - Space complexity: O(log N).
 */