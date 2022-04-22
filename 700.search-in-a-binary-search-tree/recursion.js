/*
 * @lc app=leetcode id=700 lang=javascript
 *
 * [700] Search in a Binary Search Tree
 */

/**
 * tags: #binary-tree, #binary-search-tree
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (root == null || val == root.val) return root;

  // if val < root.val - the looking up value is on the left side (narrow down)
  // if val > root.val - ths looking up value is on the right side (scale up)
  return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);
};
// @lc code=end


/**
 * - Time complexity: O(H), where H is a tree height. The results in O(log N) in the average case, and O(N) in the worst case.
 * 
 * - Space complexity: O(H) to keep the recursion stack, i.e. O(log N) in the average case, and O(N) in the worst case.
 */