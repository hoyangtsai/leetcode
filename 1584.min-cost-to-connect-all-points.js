/*
 * @lc app=leetcode id=1584 lang=javascript
 *
 * [1584] Min Cost to Connect All Points
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
  function UnionFind(N) {
    let group = Array(N).fill(0);
    let rank = Array(N).fill(0);
    for (let i = 0; i < N; i++) {
      group[i] = i;
    }

    this.find = (node) => {
      if (group[node] != node) {
        group[node] = this.find(group[node]);
      }
      return group[node];
    }

    this.union = (node1, node2) => {
      const group1 = this.find(node1);
      const group2 = this.find(node2);

      // node1 and node2 already belong to same group.
      if (group1 == group2) {
        return false;
      }

      if (rank[group1] > rank[group2]) {
        group[group2] = group1;
      } else if (rank[group1] < rank[group2]) {
        group[group1] = group2;
      } else {
        group[group1] = group2;
        rank[group2] += 1;
      }

      return true;
    }
  }

  const N = points.length;
  let allEdges = [];

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      let weight = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
      allEdges.push([weight, i, j]);
    }
  }
   
  // Sort all edges in increasing order.
  allEdges.sort((a, b) => a[0] - b[0]);

  const uf = new UnionFind(N);
  let mstCost = 0;
  let edgesUsed = 0;

  for (let i = 0; i < allEdges.length && edgesUsed < N - 1; i++) {
    const node1 = allEdges[i][1];
    const node2 = allEdges[i][2];
    const weight = allEdges[i][0];
    
    if (uf.union(node1, node2)) {
      mstCost += weight;
      edgesUsed++;
    }
  }

  return mstCost;
};
// @lc code=end

