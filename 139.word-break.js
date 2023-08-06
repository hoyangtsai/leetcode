/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

/**
 * tags: #trie, #dynamic-programming
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  function TrieNode() {
    this.isWord = false;
    this.children = new Map();
  }

  let root = new TrieNode();

  // build the TrieNode
  for (const word of wordDict) {
    let curr = root;
    for (const c of word) {
      if (!curr.children.has(c)) {
        curr.children.set(c, new TrieNode());
      }

      curr = curr.children.get(c);
    }
    curr.isWord = true;
  }

  let dp = Array(s.length).fill(false);
  for (let i = 0; i < s.length; i++) {
    if (i == 0 || dp[i - 1]) {
      let curr = root;
      for (let j = i; j < s.length; j++) {
        let c = s.charAt(j);
        // no words exist
        if (!curr.children.has(c)) {
          break;
        }
        
        curr = curr.children.get(c);
        if (curr.isWord) {
          dp[j] = true;
        }
      }
    }
  }

  return dp[s.length - 1];
};
// @lc code=end


/**
 * - Time complexity: O(n^2 * m * k)
 * - Space complexity: O(n + m * k)
 */