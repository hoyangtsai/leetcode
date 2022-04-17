/*
 * @lc app=leetcode id=897 lang=javascript
 *
 * [897] Increasing Order Search Tree
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
var increasingBST = function(root) {
  function inorder(node, vals) {
    if (node == null) return;
    inorder(node.left, vals);
    vals.push(node.val);
    inorder(node.right, vals);
  }

  // convert to an array by ascending order
  let vals = [];
  inorder(root, vals);

  let ans = new TreeNode();
  let cur = ans;
  for (const v of vals) {
    cur.right = new TreeNode(v);
    cur = cur.right;
  }
  return ans.right;
};
// @lc code=end


/**
 * - Time complexity: O(N), where N is the number of nodes in the given tree.
 * - Space complexity: O(N).
 */