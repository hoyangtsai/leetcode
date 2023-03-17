/*
 * @lc app=leetcode id=701 lang=javascript
 *
 * [701] Insert into a Binary Search Tree
 */

/**
 * #binary-tree, #binary-search-tree
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
var insertIntoBST = function(root, val) {
  let node = root;
  while (node != null) {
    if (val > node.val) {
      if (node.right == null) {
        node.right = new TreeNode(val);
        return root;
      } else {
        node = node.right;
      }
    } else {
      if (node.left == null) {
        node.left = new TreeNode(val);
        return root;
      } else {
        node = node.left;
      }
    }
  }

  return new TreeNode(val);
};
// @lc code=end


/**
 * - Time complexity: O(H), where H is a tree height.
 * - Space complexity: O(1).
 */