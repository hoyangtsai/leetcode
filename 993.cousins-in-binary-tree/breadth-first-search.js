/*
 * @lc app=leetcode id=993 lang=javascript
 *
 * [993] Cousins in Binary Tree
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  let queue = [root];
  while (queue.length > 0) {
    let foundX = false;
    let foundY = false;

    const nodesAtDepth = queue.length;

    for (let i = 0; i < nodesAtDepth; i++) {
      // FIFO
      const node = queue.shift();

      // check if children are x and y
      if (node.left && node.right) {
        if (
          (node.left.val === x && node.right.val === y) ||
          (node.left.val === y && node.right.val === x)
        )
          return false;
      }

      // find x and y at the same level
      if (node.val === x) foundX = true;
      if (node.val === y) foundY = true;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (foundX && foundY) return true;
  }

  return false;
};
// @lc code=end


/**
 * - Time complexity: O(N), where N is the number of nodes in the binary tree. In the worst case, we might have to visit all the nodes of the binary tree.
 * - Space complexity: O(N). This is because the maximum amount of space utilized by the recursion stack would be N, as the height of a skewed binary tree could be, at worst N.
 */