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
  if (!root1) return root2;

  let stack = [];
  stack.push([root1, root2]);

  while (stack.length > 0) {
    let t = stack.pop();

    if (t[0] == null || t[1] == null) continue;

    t[0].val += t[1].val;

    if (t[0].left == null) {
      t[0].left = t[1].left;
    } else {
      stack.push([t[0].left, t[1].left]);
    }

    if (t[0].right == null) {
      t[0].right = t[1].right;
    } else {
      stack.push([t[0].right, t[1].right]);
    }
  }

  return root1;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */