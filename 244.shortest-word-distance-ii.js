/*
 * @lc app=leetcode id=244 lang=javascript
 *
 * [244] Shortest Word Distance II
 */

/**
 * tags: #design
 */

// @lc code=start
/**
 * @param {string[]} wordsDict
 */
var WordDistance = function(wordsDict) {
  this.words = wordsDict;
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
  let p1 = -1, p2 = -1, minDistance = this.words.length;

  for (let i = 0; i < this.words.length; i++) {
    if (this.words[i] === word1) {
      p1 = i;
    }
    if (this.words[i] === word2) {
      p2 = i;
    }
    if (p1 !== -1 && p2 !== -1) {
      minDistance = Math.min(minDistance, Math.abs(p1 - p2));
      if (minDistance === 1) return minDistance;
    }
  }

  return minDistance;
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */
// @lc code=end

