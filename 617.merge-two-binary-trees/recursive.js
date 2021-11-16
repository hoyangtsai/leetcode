/*
 * @lc app=leetcode id=617 lang=javascript
 *
 * [617] Merge Two Binary Trees
 */

/**
 * com: #facebook
 * tags: #binary-tree, #top-100-liked
 * {@link mergeTwoLists|./21.merge-two-sorted-lists/}
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
  if (!root1 || !root2) return root1 || root2;

  root1.val += root2.val;

  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  
  return root1;
};
// @lc code=end


/**
 * - Time complexity: O(m). The total of m nodes need to be traversed. Hence, m represents the minimum number of nodes from the two given trees.
 * - Space complexity: O(m). The depth of the recursion tree can go upto m in the case of a skewed tree. In average case, depth will be O(log m).
 */