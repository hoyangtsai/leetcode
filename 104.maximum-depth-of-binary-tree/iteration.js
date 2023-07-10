/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */

/**
 * tags: #binary-tree, #BFS
 * {@link 1302.deepest-leaves-sum/dfs.js}
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
  if (!root) return 0;

  let stack = [[root, 1]];
  let depth = 0, currDepth = 0;

  while (stack.length > 0) {
    const [node, prevDepth] = stack.shift();
    currDepth = prevDepth;

    if (node != null) {
      depth = Math.max(depth, currDepth);
      stack.push([node.left, currDepth + 1]);
      stack.push([node.right, currDepth + 1]);
    }
  }

  return depth;
};
// @lc code=end


/**
 * - Time complexity: O(N)
 * - Space complexity: O(log N)
 */