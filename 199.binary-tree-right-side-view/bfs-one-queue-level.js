/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (root == null) return [];

  let rightSide = [];

  let queue = [root];

  while (queue.length > 0) {
    let levelLength = queue.length;

    for (let i = 0; i < levelLength; i++) {
      let node = queue.shift();

      // if it's the rightmost element
      if (i == levelLength - 1) {
        rightSide.push(node.val);
      }

      // add child nodes in the queue
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right != null) {
        queue.push(node.right);
      }
    }
  }

  return rightSide;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(D).
 */

