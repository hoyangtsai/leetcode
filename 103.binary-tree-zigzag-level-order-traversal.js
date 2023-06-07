/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
 */

/**
 * tags: #binary-tree, #tree-to-array
 * #top-interview-questions
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return [];

  let res = [];
  let level = 0;

  const queue = [root];

  while (queue.length > 0) {
    const len = queue.length;
    const levelList = [];

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      if (level % 2 == 0) {
        levelList.push(node.val);
      } else {
        levelList.unshift(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    res.push(levelList);
    level++;
  }

  return res;
};
// @lc code=end

