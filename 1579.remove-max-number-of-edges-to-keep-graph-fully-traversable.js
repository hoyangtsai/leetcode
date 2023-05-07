/*
 * @lc app=leetcode id=1579 lang=javascript
 *
 * [1579] Remove Max Number of Edges to Keep Graph Fully Traversable
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function(n, edges) {
  class UnionFind{
    constructor(n){
      this.parent = new Array(n).fill().map((_,i) => i);
      this.groups = n;
    }

    find(i){
      if(this.parent[i] !== i) this.parent[i] = this.find(this.parent[i])
      return this.parent[i];
    }

    // Return true if parent is changed
    union(i, j){
      const x = this.find(i), y = this.find(j);
      if(x === y) return false;
      else{
          this.parent[y] = x;
          this.groups--;
          return true;
      }
    }
  }

  const alice = new UnionFind(n), bob = new UnionFind(n);

  // Count number of times parent changed
  let count = 0;

  // Check all type 3 edges
  for (let [type, u, v] of edges) {
    if (type === 3 && alice.union(u, v) && bob.union(u, v)) count++;
  }

  // Check all type 1 & 2 edges
  for (let [type, u, v] of edges) {
    if (type === 1 && alice.union(u, v)) count++;
    if (type === 2 && bob.union(u, v)) count++;
  }

  // If groups = 1 then all nodes are connected
  if (alice.groups === 1 && bob.groups === 1) return edges.length - count;
  else return -1;
};
// @lc code=end

