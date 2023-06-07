/*
 * @lc app=leetcode id=692 lang=javascript
 *
 * [692] Top K Frequent Words
 */

/**
 * tags: #trie, #bucket-sort
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  class TrieNode {
    constructor() {
      this.children = Array(26);
      this.isWord = false;
    }
  }

  function addWord(root, word) {
    let cur = root;
    for (const c of word) {
      if (cur.children[c.charCodeAt(0) - 'a'.charCodeAt(0)] == null) {
        cur.children[c.charCodeAt(0) - 'a'.charCodeAt(0)] = new TrieNode();
      }
      cur = cur.children[c.charCodeAt(0) - 'a'.charCodeAt(0)];
    }
    cur.isWord = true;
  }

  let res = [];
  let n = words.length;
  let bucket = Array(n + 1);
  let cnt = new Map();

  function getWords(root, prefix) {
    if (k == 0) return;

    if (root.isWord) {
      k--;
      res.push(prefix);
    }

    for (let i = 0; i < 26; i++) {
      if (root.children[i] != null) {
        getWords(
          root.children[i],
          prefix + String.fromCharCode(i + 'a'.charCodeAt(0))
        );
      }
    }
  }

  for (const word of words) {
    cnt.set(word, (cnt.get(word) || 0) + 1);
  }

  for (const [key, value] of cnt) {
    if (bucket[value] == null) {
      bucket[value] = new TrieNode();
    }
    addWord(bucket[value], key);
  }

  for (let i = n; i > 0; i--) {
    if (bucket[i] != null) {
      getWords(bucket[i], "");
    }
    if (k == 0) {
      break;
    }
  }
  
  return res;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(N).
 */