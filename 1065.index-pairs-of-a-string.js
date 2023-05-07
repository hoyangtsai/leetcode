/*
 * @lc app=leetcode id=1065 lang=javascript
 *
 * [1065] Index Pairs of a String
 */

/**
 * tags: #design, #trie, #字典樹
 * {@link 211.design-add-and-search-words-data-structure.js}
 */

// @lc code=start

class TrieNode {
  constructor() {
    this.next = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word.charAt(i);
      if (!cur.next.get(char)) {
        cur.next.set(char, new TrieNode());
      }
      cur = cur.next.get(char);
    }
    cur.isEndOfWord = true;
  }
}

/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
var indexPairs = function(text, words) {
  let trie = new Trie();
  for (const word of words) {
    trie.insert(word);
  }
  let ans = [];
  for (let i = 0; i < text.length; i++) {
    let p = trie.root;
    for (let j = i; j < text.length; j++) {
      if (!p.next.get(text.charAt(j))) {
        break;
      }
      p = p.next.get(text.charAt(j));
      if (p.isEndOfWord) {
        ans.push([i, j]);
      }
    }
  }
  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n * s + m^2).
 * - Space complexity: O(n * s).
 */