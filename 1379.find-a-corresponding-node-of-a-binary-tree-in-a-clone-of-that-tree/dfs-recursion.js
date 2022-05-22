/*
 * @lc app=leetcode id=1379 lang=javascript
 *
 * [1379] Find a Corresponding Node of a Binary Tree in a Clone of That Tree
 */

/**
 * tags: #binary-tree, #DFS, #inorder
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
  let ans = null;

  function inorder(o, c) {
    if (o != null) {
      inorder(o.left, c.left);
      if (o == target) {
        ans = c;
      }
      inorder(o.right, c.right);
    }
  }

  inorder(original, cloned);
  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(N).
 */