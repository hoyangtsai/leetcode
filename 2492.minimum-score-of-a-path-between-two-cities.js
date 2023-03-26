/*
 * @lc app=leetcode id=2492 lang=javascript
 *
 * [2492] Minimum Score of a Path Between Two Cities
 */

/**
 * tags: #union-find
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
  function UnionFind(size) {
    let parent = {};
    let count = 0;
    for (let i = 0; i < size; i++) {
      parent[i] = i;
    }

    this.union = (x, y) => {
      const rootX = this.find(x);
      const rootY = this.find(y);
      
      if (rootX != rootY) {
        if (parent[rootX] < parent[rootY]) {
          parent[rootX] = rootY;
        } else if (parent[rootY] < parent[rootX]) {
          parent[rootY] = rootX;
        } else {
          parent[rootY] = rootX;
          count++;
        }
      }
    }

    this.find = (x) => {
      if (parent[x] != x) parent[x] = this.find(parent[x]);
      return parent[x];
    }
  }

  const uf = new UnionFind(n + 1);
  let ans = Number.POSITIVE_INFINITY;

  for (const road of roads) {
    uf.union(road[0], road[1]);
  }

  for (const road of roads) {
    if (uf.find(1) == uf.find(road[0])) {
      ans = Math.min(ans, road[2])
    }
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n + e).
 *    - The dfs function visits each node once, which takes O(n) time in total. Because we have undirected edges, each edge can only be iterated twice (by nodes at the end), resulting in O(e) operations total while visiting all nodes.
 *    - We also need O(e) time to initialize the adjacency list and O(n) to initialize the visit array.
 * 
 * - Space complexity: O(n + e).
 *   - Building the adjacency list takes O(e) space.
 *   - The recursion call stack used by dfs can have no more than n elements in the worst-case scenario. It would take up O(n) space in that case.
 *   - The visit array takes O(n) space.
 */