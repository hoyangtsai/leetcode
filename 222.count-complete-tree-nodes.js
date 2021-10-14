/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
 */

// @microsoft
// #tree, #binary-tree, #binary-search
// #google-interview

// 
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
var countNodes = function(root) {
  // Return tree depth in O(d) time.
  function getDepth(node) {
    let d = 0;
    while (node.left != null) {
      node = node.left;
      d++;
    }
    return d;
  }

  // Last level nodes are enumerated from 0 to 2**d - 1 (left -> right).
  // Return True if last level node idx exists. 
  // Binary search with O(d) complexity.
  function exists(idx, d, node) {
    let left = 0;
    let right = 2 ** d - 1; // Math.pow(2, d) - 1 
    for (let i = 0; i < d; i++) {
      let pivot = ~~(left + (right - left) / 2);
      if (idx <= pivot) {
        node = node.left;
        right = pivot;
      }
      else {
        node = node.right;
        left = pivot + 1;
      }
    }
    return node != null;
  }

  // if the tree is empty
  if (root == null) return 0;

  let d = getDepth(root);
  // if the tree contains 1 node
  if (d == 0) return 1;

  // Last level nodes are enumerated from 0 to 2**d - 1 (left -> right).
  // Perform binary search to check how many nodes exist.
  let left = 1;
  let right = Math.pow(2, d) - 1;
  while (left <= right) {
    let pivot = ~~((right + left) / 2);
    if (exists(pivot, d, root)) left = pivot + 1;
    else right = pivot - 1;
  }

  // The tree contains 2**d - 1 nodes on the first (d - 1) levels
  // and left nodes on the last level.
  return Math.pow(2, d) - 1 + left;
};
// @lc code=end


/** Binary search
 * 
 * - Time complexity: O(d^2) = O(log^2 N) where d is a tree depth
 * - Space complexity: O(1).
 */
