/*
 * @lc app=leetcode id=947 lang=javascript
 *
 * [947] Most Stones Removed with Same Row or Column
*/

// @google, @apple
// #union-find
// #google-interview

// @lc code=start
/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
  function UnionFind() {
    let parent = {};
    let count = 0;

    this.count = () => {
      return count;
    }

    this.union = (x, y) => {
      let rootX = this.find(x);
      let rootY = this.find(y);

      if (rootX == rootY) {
        return;
      }

      parent[rootX] = rootY;
      // 兩個連通分量合併成為一個，連通分量的總數 -1
      count --;
    }

    this.find = (x) => {
      if (parent[x] == null) {
        parent[x] = x;
        count ++;
      }

      if (x != parent[x]) {
        parent[x] = this.find(parent[x]);
      }

      return parent[x];
    }
  }

  let unionFind = new UnionFind();

  for (const stone of stones) {
    // 下面這三種寫法任選其一
    // unionFind.union(~stone[0], stone[1]);
    // unionFind.union(stone[0] - 10001, stone[1]);
    // for re-poisition outside of 10^4
    unionFind.union(stone[0] + 10001, stone[1]);
  }

  return stones.length - unionFind.count();
};
// @lc code=end


removeStones([[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]]);