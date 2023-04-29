/*
 * @lc app=leetcode id=1697 lang=javascript
 *
 * [1697] Checking Existence of Edge Length Limited Paths
 */

/**
 * tags: #union-find
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var distanceLimitedPathsExist = function(n, edgeList, queries) {
  function UnionFind(size) {
    let root = Array.from(Array(size).keys());
    let rank = new Array(size);

    this.union = (x, y) => {
      const rootX = this.find(x);
      const rootY = this.find(y);

      if (rootX != rootY) {
        // smaller tree's root becomes bigger tree's root
        if (rank[rootX] < rank[rootY]) {
          root[rootX] = rootY;
        } else if (rank[rootX] > rank[rootY]) {
          root[rootY] = rootX;
        } else {
          root[rootY] = rootX;
          rank[rootX] += 1;
        }
      }
    }

    this.find = (i) => {
      if (root[i] != i) {
        root[i] = this.find(root[i]);
      }
      return root[i];
    }

    this.areConnected = (node1, node2) => {
      const rootX = this.find(node1);
      const rootY = this.find(node2);
      return rootX == rootY;
    }
  }

  let uf = new UnionFind(n);
  const queriesCount = queries.length;

  // Store original indices with all queries.
  let queriesWithIndex = Array.from(Array(queriesCount), () => Array(4));

  for (let i = 0; i < queriesCount; ++i) {
    queriesWithIndex[i][0] = queries[i][0];
    queriesWithIndex[i][1] = queries[i][1];
    queriesWithIndex[i][2] = queries[i][2];
    queriesWithIndex[i][3] = i;
  }

  // Sort all edges in increasing order of their edge weights.
  edgeList.sort((a, b) => a[2] - b[2]);
  // Sort all queries in increasing order of the limit of edge allowed.
  queriesWithIndex.sort((a, b) => a[2] - b[2]);

  let answer = Array(queriesCount).fill(false);
  let edgesIndex = 0;
  // Iterate on each query one by one.
  for (let queryIndex = 0; queryIndex < queriesCount; queryIndex += 1) {
    let p = queriesWithIndex[queryIndex][0];
    let q = queriesWithIndex[queryIndex][1];
    let limit = queriesWithIndex[queryIndex][2];
    let queryOriginalIndex = queriesWithIndex[queryIndex][3];

    // We can attach all edges which satisfy the limit given by the query.
    while (edgesIndex < edgeList.length && edgeList[edgesIndex][2] < limit) {
      let node1 = edgeList[edgesIndex][0];
      let node2 = edgeList[edgesIndex][1];
      uf.union(node1, node2);
      edgesIndex += 1;
    }
    
    // If both nodes belong to the same component, it means we can reach them. 
    answer[queryOriginalIndex] = uf.areConnected(p, q);
  }

  return answer;
};
// @lc code=end


/**
 * - Time complexity: O(n + e log e + q log q).
 * - Space complexity: O(n + q).
 */