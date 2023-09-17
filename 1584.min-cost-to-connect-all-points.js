/*
 * @lc app=leetcode id=1584 lang=javascript
 *
 * [1584] Min Cost to Connect All Points
 */

/**
 * tags: #minimum-spanning-tree, #kruskal-algorithm, #union-find, #disjoint-set
 * {@see https://leetcode.com/explore/featured/card/graph/621/algorithms-to-construct-minimum-spanning-tree/3858/}
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
  function UnionFind(N) {
    let root = Array.from(Array(N).keys());
    let rank = Array(N).fill(0);
    // for (let i = 0; i < N; i++) {
    //   root[i] = i;
    // }

    this.find = (node) => {
      if (root[node] != node) {
        root[node] = this.find(root[node]);
      }
      return root[node];
    }

    this.union = (x, y) => {
      const rootX = this.find(x);
      const rootY = this.find(y);

      if (rootX != rootY) {
        if (rank[rootX] > rank[rootY]) {
          root[rootY] = rootX;
        } else if (rank[rootX] < rank[rootY]) {
          root[rootX] = rootY;
        } else {
          root[rootX] = rootY;
          rank[rootY] += 1;
        }
      }
    }

    this.connected = (x, y) => {
      return this.find(x) == this.find(y);
    }
  }

  function Edge(node1, node2, cost) {
    this.node1 = node1;
    this.node2 = node2;
    this.cost = cost;
  }

  const N = points.length;
  let allEdges = [];

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const cost = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
      allEdges.push(new Edge(i, j, cost));
    }
  }
   
  // Sort all edges in ascending order
  allEdges.sort((a, b) => a.cost - b.cost);

  const uf = new UnionFind(N);
  let mstCost = 0;
  let edgesUsed = 0;

  for (let i = 0; i < allEdges.length && edgesUsed < N - 1; i++) {
    const node1 = allEdges[i].node1;
    const node2 = allEdges[i].node2;
    const cost = allEdges[i].cost;
    
    if (!uf.connected(node1, node2)) {
      uf.union(node1, node2);
      mstCost += cost;
      edgesUsed++;
    }
  }

  return mstCost;
};
// @lc code=end


/**
 * - Time complexity: O(N^2 * log(N)).
 * - Space complexity: O(N^2).
 */