/*
 * @lc app=leetcode id=1202 lang=javascript
 *
 * [1202] Smallest String With Swaps
 */

/**
 * tags: #union-find, #disjoint-set, #lexicographic
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
  function UnionFind(size) {
    const root = Array.from(Array(size).keys());
    const rank = Array(size).fill(1);
    
    this.parentByIds = {}

    this.union = (x, y) => {
      const rootX = this.find(x);
      const rootY = this.find(y);

      if (rootX != rootY) {
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

    this.createParentByIds = (s) => {
      let { parentByIds } = root.reduce((acc, curr, i) => {
        const char = s[i]
        const parent = this.find(root[curr])
        if (!acc.parentByIds[parent]) {
          acc.parentByIds[parent] = [char]
        } else {
          acc.parentByIds[parent].push(char)
        }
        return acc
      }, { parentByIds: {} })

      const sortedParentByIds = parentByIds => {
        return Object.entries(parentByIds).reduce((acc, [key, value]) => {
          acc[key] = value.sort()
          return acc
        }, {})
      }
      
      this.parentByIds = sortedParentByIds(parentByIds)
    }

    this.getFirstCharOfParentNode = (i) => {
      const parent = this.find(root[i])
      const characters = this.parentByIds[parent]

      return characters.shift()
    }
  }

  const uf = new UnionFind(s.length);

  // Iterate over the edges
  for (const [source, target] of pairs) {
    // Perform the union of end points
    uf.union(source, target);
  }

  /*
  Create Dictionary
     - key = Parent node
     - value = Array of children nodes sorted in (a-z order)
 */
  uf.createParentByIds(s)

  // String to store the answer
  let res = [];

  for (let i = 0; i < s.length; i++) {
    /*
    On each iteration
     - Use the union.find(x) operation to locate the parent node
     - Use the parentNode as the key to get all the children nodes
     - Use shift() to get the "Smallest String" char
    */
    res[i] = uf.getFirstCharOfParentNode(i)
  }

  return res.join('');
};
// @lc code=end

