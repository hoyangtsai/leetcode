/*
 * @lc app=leetcode id=1319 lang=javascript
 *
 * [1319] Number of Operations to Make Network Connected
 */

/**
 * tags: #union-find
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
  function UnionFind(n) {
    const root = Array.from(Array(n).keys());
    const rank = Array(n).fill(0);

    this.union = (x, y) => {
      const rootX = this.find(x);
      const rootY = this.find(y);
      
      if (rank[rootX] < rank[rootY]) {
        root[rootX] = rootY;
      } else if (rank[rootX] > rank[rootY]) {
        root[rootY] = rootX;
      } else {
        root[rootY] = rootX;
        rank[rootX] += 1;
      } 
    }

    this.find = (i) => {
      if (root[i] != i) {
        root[i] = this.find(root[i]);
      }
      return root[i];
    }
  }

  if (connections.length < n - 1) {
    return -1;
  }

  const uf = new UnionFind(n);
  let numOfConnectedComponent = n;
  for (const conn of connections) {
    if (uf.find(conn[0]) != uf.find(conn[1])) {
      uf.union(conn[0], conn[1]);
      numOfConnectedComponent--;
    }
  }

  return numOfConnectedComponent - 1;
};
// @lc code=end


/**
 * - Time complexity: O(n + e).
 * - Space complexity: O(n).
 */