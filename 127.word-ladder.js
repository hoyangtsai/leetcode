/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */

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
  let beginSet = [beginWord];
  let endSet = [endWord];

  let level = 1;

  while (beginSet.length > 0 && endSet.length > 0) {
    if (beginSet.length > endSet.length) {
      [beginSet, endSet] = [endSet, beginSet];
    }
    let newBeginSet = [];
    for (const word of beginSet) {
      let neighbors = getNeighbors(word);
      for (const neigh of neighbors) {
        if (endSet.includes(neigh)) return level + 1;
        if (words.has(neigh)) {
          newBeginSet.push(neigh);
          words.delete(neigh);
        }
      }
    }
    beginSet = newBeginSet;
    level ++;
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
