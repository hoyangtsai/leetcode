/*
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
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
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  // add values which are greater or equal to low and 
  // lower or equal to high
  let ans = 0;
  function dfs(node, L, H) {
    if (node != null) {
      if (L <= node.val && node.val <= H)
        ans += node.val;
      if (L < node.val) 
        dfs(node.left, L, H);
      if (node.val < H)
        dfs(node.right, L, H);
    }
  }

  dfs(root, low, high);

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(N).
 */