/*
 * @lc app=leetcode id=1302 lang=javascript
 *
 * [1302] Deepest Leaves Sum
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
var deepestLeavesSum = function(root) {
  let sum = 0, depth = 0, currDepth = 0;

  let stack = [[root, 0]];

  while (stack.length > 0) {
    const [node, prevDepth] = stack.pop();
    currDepth = prevDepth;

    if (node.left == null && node.right == null) {
      if (depth < currDepth) {
        sum = node.val;
        depth = currDepth
      } else if (depth == currDepth) {
        sum += node.val;
      }
    } else {
      if (node.right != null) {
        stack.push([node.right, currDepth + 1]);
      }
      if (node.left != null) {
        stack.push([node.left, currDepth + 1]);
      }
    }
  }

  return sum;
};
// @lc code=end

