/*
 * @lc app=leetcode id=261 lang=javascript
 *
 * [261] Graph Valid Tree
 */

/**
 * tags: #graph, #union-find
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
  if (edges.length != n - 1) return false;

  function UnionFind(n) {
    let count = n;
    let parent = Array.from(Array(n).keys());

    this.union = (x, y) => {
      let rootX = this.find(x);
      let rootY = this.find(y);

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

  const uf = new UnionFind(n);
  for (const e of edges) {
    uf.union(e[0], e[1]);
  }

  return uf.getCount() == 1;
};
// @lc code=end

