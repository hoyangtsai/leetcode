/*
 * @lc app=leetcode id=323 lang=javascript
 *
 * [323] Number of Connected Components in an Undirected Graph
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
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

  return uf.getCount();
};
// @lc code=end


/**
 * Here E = Number of edges, V = Number of vertices.
 * 
 * - Time complexity: O(E * α(n)).
 * - Space complexity: O(V).
 */