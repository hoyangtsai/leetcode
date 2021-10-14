/*
 * @lc app=leetcode id=753 lang=javascript
 *
 * [753] Cracking the Safe
 */

// @google
// #depth-first-search, #graph
// #google-interview

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var crackSafe = function(n, k) {
  let highest = Math.pow(10, n - 1);
  // let ans = '0'.repeat(n - 1);
  let ans = [];
  let visited = new Set();

  function dfs(node) {
    for (let i = 0; i < k; ++i) {
      let nei = node * 10 + i;
      if (!visited.has(nei)) {
        visited.add(nei);
        dfs(nei % highest);
        ans.push(i);
      }
    }
  }

  dfs(0);
  ans.push('0'.repeat(n - 1));
  return ans.join('');
};
// @lc code=end

/**
 * DFS
 * Time complexity: O(n * k^n)
 * Space complexity: O(n * k^n)
 */

const res = crackSafe(3, 2);
console.log('res =>', res);