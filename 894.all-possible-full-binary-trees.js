/*
 * @lc app=leetcode id=894 lang=javascript
 *
 * [894] All Possible Full Binary Trees
 */

/**
 * @Nvidia
 * tags: #binary-tree, #dynamic-programming
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
  function dfs(n, dp) {
    if (n % 2 == 0) {
      return dp[n] = [];
    }
  
    if (n == 1) {
      return dp[n] = [new TreeNode(0)];
    }

    let ans = [];

    for (let i = 1; i < n; i += 2) {
      let left = dfs(i, dp);
      let right = dfs(n - i - 1, dp);
      
      for (let row = 0; row < left.length; row++) {
        for (let col = 0; col < right.length; col++) {
          const node = new TreeNode(0);
                
          node.left = left[row];
          node.right = right[col];
                
          ans.push(node);
        }
      }
    }

    return dp[n] = ans;
  }

  let dp = new Array(n + 1).fill(-1);
  return dfs(n, dp);
};
// @lc code=end


/**
 * - Time complexity: O(2^n/2).
 * - Space complexity: O(n * 2^n/2).
 */