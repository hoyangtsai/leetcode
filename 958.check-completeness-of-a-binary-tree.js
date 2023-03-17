/*
 * @lc app=leetcode id=958 lang=javascript
 *
 * [958] Check Completeness of a Binary Tree
 */

/**
 * #binary-tree, #breadth-first-search
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
 * @return {boolean}
 */
var isCompleteTree = function(root) {
  let queue = [root];
  let prevNode = root;

  while (queue.length > 0) {
    let curNode = queue.shift();

    if (curNode) {
      if (!prevNode) return false;

      queue.push(curNode.left);
      queue.push(curNode.right);
    }

    prevNode = curNode;
  }

  return true;
};
// @lc code=end

