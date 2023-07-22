/*
 * @lc app=leetcode id=212 lang=javascript
 *
 * [212] Word Search II
 */

/**
 * tags: #trie, #square-traverse, #direction-grid
 * #google-interview
 * {@link 79.word-search.js}
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  const buildTrie = (words) => {
    const root = {};
    for (const w of words) {
      let node = root;
      for (const c of w) {
        if (node[c] == null) node[c] = {};
        node = node[c];
      }
      node.word = w;
    }
    return root;
  };

  const root = buildTrie(words);

  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  let res = [];

  const search = (node, x, y) => {
    if (node.word != null) {
      res.push(node.word);
      node.word = null; // make sure only print one time for each word
    }

    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) return;
    if (node[board[x][y]] == null) return;

    const c = board[x][y];
    board[x][y] = '#'; // Mark visited
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      search(node[c], i, j);
    }
    board[x][y] = c; // Reset
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      search(root, i, j);
    }
  }
  return res;
};
// @lc code=end


/** 
 * - Time complexity: O(M(4*3^L-1)), where M is the number of calls in the board and L is the maximum length of words.
 * - Space complexity: O(N), where N is the total number of letter in the dictionary.
 */


let ans = findWords([["o", "a", "a", "n"], ["e", "t", "a", "e"], ["r", "h", "d", "o"], ["i", "f", "l", "g"]], ["oath", "dig", "dog", "dogs"]);
console.log('ans =>', ans);