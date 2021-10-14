/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
 */

// @facebook, @amazon, @microsoft, @google
// #tree, #depth-first-search, #binary-tree
// #google-interview
// &543, &687

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
var maxPathSum = function(root) {
  // set a minimun threshold
  // in case of node.val is a negative number and not children
  let ans = Number.NEGATIVE_INFINITY;
  function getMaxSum(node) {
    if (!node) return 0;
    let left = Math.max(0, getMaxSum(node.left));
    let right = Math.max(0, getMaxSum(node.right));
    ans = Math.max(ans, node.val + left + right);
    return Math.max(0, node.val + left, node.val + right);
  }
  getMaxSum(root);
  return ans;
};
// @lc code=end

/**
 * Resursion
 * 
 * - Time complexity: O(N), where N is number of nodes, since we visit each node no more than 2 times.
 * - Space complexity: O(H), where H is a tree height, to keep the recursion stack. In the average case of balanced tree, the tree height H = logN, in the worst case of skewed tree H = N.
 */