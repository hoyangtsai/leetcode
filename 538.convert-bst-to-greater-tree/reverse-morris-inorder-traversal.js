/*
 * @lc app=leetcode id=538 lang=javascript
 *
 * [538] Convert BST to Greater Tree
 */

/**
 * tags: #binary-tree
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
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let sum = 0;
  let node = root;

  function getSuccessor(node) {
    let succ = node.right;
    while (succ.left != null && succ.left != node) {
      succ = succ.left;
    }
    return succ;
  }

  while (node != null) {
    /* 
     * If there is no right subtree, then we can visit this node and
     * continue traversing left.
     */
    if (node.right == null) {
      sum += node.val;
      node.val = sum;
      node = node.left;
    }
    /* 
     * If there is a right subtree, then there is at least one node that
     * has a greater value than the current one. therefore, we must
     * traverse that subtree first.
     */
    else {
      let succ = getSuccessor(node);
      /* 
       * If the left subtree is null, then we have never been here before.
       */
      if (succ.left == null) {
        succ.left = node;
        node = node.right;
      }
      /* 
       * If there is a left subtree, it is a link that we created on a
       * previous pass, so we should unlink it and visit this node.
       */
      else {
        succ.left = null;
        sum += node.val;
        node.val = sum;
        node = node.left;
      }
    }
  }

  return root;
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(1)
 */