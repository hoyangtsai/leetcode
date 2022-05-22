/*
 * @lc app=leetcode id=1379 lang=javascript
 *
 * [1379] Find a Corresponding Node of a Binary Tree in a Clone of That Tree
 */

/**
 * tags: #binary-tree, #BFS, #iterative-queue
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
  let originQueue = [original], cloneQueue = [cloned];

  while (originQueue.length > 0) {
    const originNode = originQueue.shift();
    const cloneNode = cloneQueue.shift();

    if (originNode == target) {
      return cloneNode;
    }

    if (originNode.left != null) {
      originQueue.push(originNode.left);
      cloneQueue.push(cloneNode.left);
    }
    if (originNode.right != null) {
      originQueue.push(originNode.right);
      cloneQueue.push(cloneNode.right);
    }
  }
  
  return null;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(N).
 */