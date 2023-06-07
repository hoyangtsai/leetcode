/*
 * @lc app=leetcode id=211 lang=javascript
 *
 * [211] Design Add and Search Words Data Structure
 */

/**
 * @Nvidia
 * tags: #design, #trie
 * {@link 1065.index-pairs-of-a-string.js}
 */

// @lc code=start

class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

var WordDictionary = function() {
  this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let node = this.root;
  for (let char of word) {
    if (!node.children.has(char)) {
      node.children.set(char, new TrieNode());
    }
    node = node.children.get(char);
  }
  node.isEndOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  function searchRecursive(word, index, node) {
    if (index == word.length) {
      return node.isEndOfWord;
    }
    let char = word.charAt(index);
    if (char != '.') {
      if (!node.children.has(char)) {
        return false;
      }
      return searchRecursive(word, index + 1, node.children.get(char));
    } else {
      for (let childNode of node.children.values()) {
        if (searchRecursive(word, index + 1, childNode)) {
          return true;
        }
      }
      return false;
    }
  }

  return searchRecursive(word, 0, this.root);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end

