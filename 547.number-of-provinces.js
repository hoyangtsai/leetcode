/*
 * @lc app=leetcode id=547 lang=javascript
 *
 * [547] Number of Provinces
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  function UnionFind(n) {
    let parent = Array.from(Array(n).keys());
    let count = n;

    this.union = (x, y) => {
      const rootX = this.find(x);
      const rootY = this.find(y);
      
      if (rootX != rootY) {
        parent[rootX] = rootY;
        count--;
      }
    }

    this.find = (i) => {
      if (parent[i] != i) {
        parent[i] = this.find(parent[i]);
      }
      return parent[i];
    }

    this.getCount = () => {
      return count;
    }
  }

  const n = isConnected.length;
  const uf = new UnionFind(n);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j] == 1) {
        uf.union(i, j);
      }
    }
  }

  return uf.getCount();
};
// @lc code=end

