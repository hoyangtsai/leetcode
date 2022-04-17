/*
 * @lc app=leetcode id=305 lang=javascript
 *
 * [305] Number of Islands II
 */

/**
 * tags: #union-find, #disjoint-set
 * {@link 200.number-of-islands/union-find.js}
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2 = function(m, n, positions) {
  function UnionFind(N) {
    let count = 0;
    let parent = Array.from(new Array(N).fill(0), () => new Array(N).fill(0));
    let rank = Array.from(new Array(N).fill(0), () => new Array(N).fill(0));

    for (let i = 0; i < N; i++) {
      parent[i] = -1;
      rank[i] = 0;
    }

    this.union = (x, y) => {
      const rootX = this.find(x);
      const rootY = this.find(y);

      if (rootX != rootY) {
        // smaller tree's parent (root) becomes bigger tree's root
        if (rank[rootX] < rank[rootY]) {
          parent[rootX] = rootY;
        } else if (rank[rootY] < rank[rootX]) {
          parent[rootY] = rootX;
        } else {
          parent[rootY] = rootX;
          rank[rootX] += 1;
        }
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

    this.isValid = (i) => {
      return parent[i] >= 0;
    }

    this.setParent = (i) => {
      parent[i] = i;
      count++;
    }
  }

  let ans = [];
  const uf = new UnionFind(m, n);

  for (const [r, c] of positions) {
    let overlap = [];

    // for this example
    // positions = [[0,0],[0,1],[1,2],[2,1]]
    // after push [0, 0] check [0, 1] uf.isValid r = 0 is valid
    if (r - 1 >= 0 && uf.isValid((r - 1) * n + c)) {
      overlap.push((r - 1) * n + c);
    }
    if (r + 1 < m && uf.isValid((r + 1) * n + c)) {
      overlap.push((r + 1) * n + c);
    }
    if (c - 1 >= 0 && uf.isValid(r * n + c - 1)) {
      overlap.push(r * n + c - 1);
    }
    if (c + 1 < n && uf.isValid(r * n + c + 1)) {
      overlap.push(r * n + c + 1);
    }

    const index = r * n + c;

    if (!uf.isValid(index)) {
      uf.setParent(index);
    }

    // adjacent 1s will be unioned
    // count - 1
    for (const i of overlap) {
      uf.union(i, index);
    }

    ans.push(uf.getCount());
  }

  return ans;
};
// @lc code=end

