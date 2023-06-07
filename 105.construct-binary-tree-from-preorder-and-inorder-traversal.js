/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 */

/**
 * tags: #binary-tree, #build-tree, #array-to-tree
 * #top-interview-questions
 * 
 * preorder the first element is the root
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let p = 0, i = 0;
  function build(value) {
    if (inorder[i] != value) {
      let root = new TreeNode(preorder[p]);
      p++
      root.left = build(root.val);
      i++;
      root.right = build(value);
      return root;
    }
    return null;
  }
  return build();
};
// @lc code=end
