/*
 * @lc app=leetcode id=843 lang=javascript
 *
 * [843] Guess the Word
 */

// @google
// #interactive, #math
// #top-google-questions

// @lc code=start
/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function(wordlist, master) {

  for (let i = 0, matches = 0; i < 10 && matches != 6; i++) {

  }

  function getMatch(a, b) {
    let matches = 0;
    for (let i = 0; i < a.length; i++) {
      if (a.charAt(i) === b.charAt(i)) matches++;
    }
    return matches;
  }
};
// @lc code=end

