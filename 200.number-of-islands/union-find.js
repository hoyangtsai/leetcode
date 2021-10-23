/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// #union-find, #matrix, #disjoint-set
// &305

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  function UnionFind(grid) {
    const m = grid.length;
    const n = grid[0].length;

    let count = 0;
    let parent = Array.from(new Array(m).fill(0), () => new Array(n).fill(0));
    let rank = Array.from(new Array(m).fill(0), () => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] == '1') {
          // flatten 2d array to 1d
          parent[i * n + j] = i * n + j;
          // init every 1s as an independent island
          count++;
        }
        rank[i * n + j] = 0;
      }
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
          rank[rootX] += 1;
        }
        // union adjacent 1s as union multiple islands as one
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

  const nr = grid.length;
  const nc = grid[0].length;
  const uf = new UnionFind(grid);

  for (let r = 0; r < nr; ++r) {
    for (let c = 0; c < nc; ++c) {
      if (grid[r][c] == '1') { // find an island
        grid[r][c] = '0'; // mark as visited

        if (r - 1 >= 0 && grid[r - 1][c] == '1') { // its left is an island
          uf.union(r * nc + c, (r - 1) * nc + c); // union them
        }
        if (r + 1 < nr && grid[r + 1][c] == '1') { // right
          uf.union(r * nc + c, (r + 1) * nc + c);
        }
        if (c - 1 >= 0 && grid[r][c - 1] == '1') { // down
          uf.union(r * nc + c, r * nc + c - 1);
        }
        if (c + 1 < nc && grid[r][c + 1] == '1') { // up
          uf.union(r * nc + c, r * nc + c + 1);
        }
      }
    }
  }

  return uf.getCount();
};
// @lc code=end

/**
 * Union Find (aka Disjoint Set)
 * 
 * - Time complexity: O(M x N).
 * - Space complexity: O(M x N).
 */