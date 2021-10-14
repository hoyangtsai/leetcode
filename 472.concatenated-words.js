/*
 * @lc app=leetcode id=472 lang=javascript
 *
 * [472] Concatenated Words
 */

// @amazon
// #string, #depth-first-search

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
  const dict = new Set(words);

  function isConcat(word) {
    if (dict.has(word)) return true;

    for (let i = 0; i < word.length; i++) {
      let prefix = word.slice(0, i + 1); // from 2 chars to full word
      if (dict.has(prefix)) {
        let suffix = word.slice(i + 1); // from mid to the end
        if (isConcat(suffix)) {
          dict.add(word);
          return true;
        }
      }
    }
    return false;
  }

  let results = [];
  for (const word of words) {
    dict.delete(word);
    if (isConcat(word)) results.push(word);
    dict.add(word);
  }
  return results;
};
// @lc code=end


/**
 * Depth first search
 * 
 */