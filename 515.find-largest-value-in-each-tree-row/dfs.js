/*
 * @lc app=leetcode id=515 lang=javascript
 *
 * [515] Find Largest Value in Each Tree Row
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
 * @return {number[]}
 */
var largestValues = function(root) {
  let ans = [];
  function dfs(node, depth) {
    if (!node) return;

    if (depth == ans.length) {
      ans.push(node.val);
    } else {
      ans[depth] = Math.max(ans[depth], node.val);
    }

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  dfs(root, 0);
  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(h)
 */