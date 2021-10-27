/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */

// @facebook, @amazon, @uber, @apple, @linkedin, @microsoft
// #breadth-first-search, #graph, #string-comb
// #google-interview

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;

  let words = new Set(wordList);
  let queue = [beginWord];
  words.delete(beginWord);
  let level = 0;

  while(queue.length > 0) {
    const size = queue.length;
    level++;
    for (let i = 0; i < size; i++) {
      const currentWord = queue.shift();
      if (currentWord == endWord) return level;
      let neighbors = getNeighbors(currentWord);
      for (const neigh of neighbors) {
        if (words.has(neigh)) {
          words.delete(neigh);
          queue.push(neigh);
        }
      }
    }
  }

  function getNeighbors(word) {
    let result = [];
    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < 26; j++) { // the char code of lowercase a begins with 97 up to 97 + 26 
        const newWord = word.substring(0, i) + String.fromCharCode(j + 97) + word.substring(i + 1);
        result.push(newWord);
      }
    }
    return result;
  }

  return 0;
};
// @lc code=end


/**
 * BFS
 * 
 * - Time complexity: O(M^2 * N).
 *   M is the length of each word and N is the total number of words in the input word list.
 * - Sapce complexity: O(M^2 * N).
 */