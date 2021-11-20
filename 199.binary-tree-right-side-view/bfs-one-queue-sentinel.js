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

  let queue = [root, null];
  let curr = root;

  while (queue.length > 0) {
    let prev = curr;
    curr = queue.shift();

    while (curr != null) {
      // add child nodes in the queue
      if (curr.left != null) {
        queue.push(curr.left);
      }
      if (curr.right != null) {
        queue.push(curr.right);
      }

      prev = curr;
      curr = queue.shift();
    }

    // the current level is finished
    // and prev is its rightmost element
    rightSide.push(prev.val);

    // add a sentinel to mark the end of the next level
    if (queue.length > 0)
      queue.push(null);
  }

  return rightSide;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(D) to keep the queue, where D is a tree diameter.
 *   Let's use the last level to estimate the queue size.
 *   This level could contain up to N/2 tree nodes in the case of complete binary tree.
 */

