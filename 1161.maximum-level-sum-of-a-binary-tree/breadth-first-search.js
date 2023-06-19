/*
 * @lc app=leetcode id=1161 lang=javascript
 *
 * [1161] Maximum Level Sum of a Binary Tree
 */

/**
 * tags: #binary-tree, #breadth-first-search
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
var maxLevelSum = function(root) {
  let level = 0, ans = 0;
  let maxSum = -Infinity;

  let queue = [root];

  while (queue.length) {
    level++;
    let sumAtCurrentLevel = 0;
    
    // Iterate over all the nodes in the current level.
    for (let i = queue.length; i > 0; i--) {
      const node = queue.shift();
      sumAtCurrentLevel += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (sumAtCurrentLevel > maxSum) {
      maxSum = sumAtCurrentLevel;
      ans = level;
    }
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */
