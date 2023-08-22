/*
 * @lc app=leetcode id=1489 lang=javascript
 *
 * [1489] Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree
 */

/**
 * tags: #union-find, #kruskal-algorithm
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var findCriticalAndPseudoCriticalEdges = function(n, edges) {
  function UnionFind(N) {
    let parent = Array.from(Array(N).keys());
    let rank = Array(N).fill(1);
    
    this.maxSize = 1;

    this.find = (x) => {
      if (x != parent[x]) {
        parent[x] = this.find(parent[x]);
      }
      return parent[x];
    }

    this.union = (x, y) => {
      let rootX = this.find(x);
      let rootY = this.find(y);

      if (rootX != rootY) {
        if (rank[rootX] < rank[rootY]) {
          [rootX, rootY] = [rootY, rootX];
        }
        parent[rootY] = rootX;
        rank[rootX] += rank[rootY];
        this.maxSize = Math.max(this.maxSize, rank[rootX]);
        return true;
      }
      return false;
    }
  }

  const m = edges.length;
  let newEdges = Array.from(Array(m).fill(0), () => Array(4).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < 3; j++) {
        newEdges[i][j] = edges[i][j];
    }
    newEdges[i][3] = i;
  }

  newEdges.sort((a, b) => a[2] - b[2]);

  // Find MST weight using union-find
  let ufStd = new UnionFind(n);
  let stdWeight = 0;
  for (const edge of newEdges) {
    if (ufStd.union(edge[0], edge[1])) {
      stdWeight += edge[2];
    }
  }

  let result = Array(2).fill([]);

  // Check each edge for critical and pseudo-critical
  for (let i = 0; i < m; i++) {
    // Ignore this edge and calculate MST weight
    let ufIgnore = new UnionFind(n);
    let ignoreWeight = 0;
    for (let j = 0; j < m; j++) {
      if (i != j && ufIgnore.union(newEdges[j][0], newEdges[j][1])) {
        ignoreWeight += newEdges[j][2];
      }
    }

    // If the graph is disconnected or the total weight is greater, 
    // the edge is critical
    if (ufIgnore.maxSize < n || ignoreWeight > stdWeight) {
      result[0] = [...result[0], newEdges[i][3]];
    } else {
      // Force this edge and calculate MST weight
      let ufForce = new UnionFind(n);
      ufForce.union(newEdges[i][0], newEdges[i][1]);
      let forceWeight = newEdges[i][2];
      for (let j = 0; j < m; j++) {
        if (i != j && ufForce.union(newEdges[j][0], newEdges[j][1])) {
          forceWeight += newEdges[j][2];
        }
      }
      // If total weight is the same, the edge is pseudo-critical
      if (forceWeight == stdWeight) {
        result[1] = [...result[1], newEdges[i][3]];
      }
    }
  }

  return result;
};
// @lc code=end


/**
 * - Time complexity: O(m^2 * \alpha(n))
 * - Space complexity: O(m)
 */