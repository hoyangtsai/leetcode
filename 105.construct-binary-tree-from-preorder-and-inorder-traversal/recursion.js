/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 */

/**
 * tags: #binary-tree, #depth-first-search
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
  let preorderIndex = 0;
  let inorderIndexMap = new Map();
  function arrayToTree(preorder, left, right) {
    // if there are no elements to construct the tree
    if (left > right) return null;

    // select the preorder_index element as the root and increment it
    let rootValue = preorder[preorderIndex++];
    let root = new TreeNode(rootValue);

    // build left and right subtree
    // excluding inorderIndexMap[rootValue] element because it's the root
    root.left = arrayToTree(preorder, left, inorderIndexMap.get(rootValue) - 1);
    root.right = arrayToTree(preorder, inorderIndexMap.get(rootValue) + 1, right);
    return root;
  }
  // build a hashmap to store value -> its index relations
  for (let i = 0; i < inorder.length; i++) {
    inorderIndexMap.set(inorder[i], i);
  }
  return arrayToTree(preorder, 0, preorder.length - 1);
};
// @lc code=end
