/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
 */

/**
 * tags: #binary-tree
 * {@link 104.maximum-depth-of-binary-tree.js}
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
var minDepth = function(root) {
  if (!root) return 0;

  let q = [root];
  let depth = 1;

  while (q.length > 0) {
    let qSize = q.length;

    while (qSize > 0) {
      qSize--;

      let node = q.shift();

      // Since we added nodes without checking null, we need to skip them here.
      if (node == null) {
        continue;
      }

      // The first leaf would be at minimum depth, hence return it.
      if (node.left == null && node.right == null) {
        return depth;
      }

      q.push(node.left);
      q.push(node.right);
    }

    depth++;
  }

  return 0;
};
// @lc code=end


/**
 * - Time complexity: O(N)
 * - Space complexity: O(N)
 */