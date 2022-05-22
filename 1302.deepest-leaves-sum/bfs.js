/*
 * @lc app=leetcode id=1302 lang=javascript
 *
 * [1302] Deepest Leaves Sum
 */

/**
 * tags: #binary-tree, #BFS
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
  let nextLevel = [root], currLevel = [];

  while (nextLevel.length > 0) {
    // prepare for the next level
    currLevel = nextLevel.slice();
    nextLevel = [];

    for (const node of currLevel) {
      // add child nodes of the current level
      // in the queue for the next level
      if (node.left != null) {
        nextLevel.push(node.left);
      }
      if (node.right != null) {
        nextLevel.push(node.right);
      }
    }
  }

  let deepestSum = 0;
  for (const node of currLevel) {
    deepestSum += node.val;
  }
  return deepestSum;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(N).
 */