/*
 * @lc app=leetcode id=1379 lang=javascript
 *
 * [1379] Find a Corresponding Node of a Binary Tree in a Clone of That Tree
 */

/**
 * tags: #binary-tree, #iterative-stack
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
  let origStack = [], clonedStack = [];
  let origNode = original, clonedNode = cloned;

  while (origStack.length > 0 || origNode != null) {
    while (origNode != null) {
      origStack.push(origNode);
      clonedStack.push(clonedNode);

      origNode = origNode.left;
      clonedNode = clonedNode.left;
    }
    origNode = origStack.pop();
    clonedNode = clonedStack.pop();

    if (origNode == target) {
      return clonedNode;
    }

    origNode = origNode.right;
    clonedNode = clonedNode.right;
  }
  
  return null;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(N).
 */