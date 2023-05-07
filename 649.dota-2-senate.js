/*
 * @lc app=leetcode id=649 lang=javascript
 *
 * [649] Dota2 Senate
 */

// @lc code=start
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
  // Initialize two arrays to keep track of the indices of the senators from each party.
  let radiant = [];
  let dire = [];
  const n = senate.length;

  // Loop through each senator in the given order.
  for (let i = 0; i < n; i++) {
    // If the senator is from the Radiant party, add their index to the radiant array
    // with an offset of n, representing their vote in the next round.
    if (senate[i] === 'R') {
      radiant.push(i + n);
    } else {
      // If the senator is from the Dire party, add their index to the dire array
      // with an offset of n, representing their vote in the next round.
      dire.push(i + n);
    }
  }

  // Loop through each round until one party has all the votes.
  while (radiant.length > 0 && dire.length > 0) {
    // Compare the indices of the first senator from each party.
    if (radiant[0] < dire[0]) {
      // If the Radiant senator's index is less than the Dire senator's index,
      // add their index to the end of the radiant array with an offset of n,
      // representing their vote in the next round.
      radiant.push(radiant[0] + n);
    } else {
      // If the Dire senator's index is less than or equal to the Radiant senator's index,
      // add their index to the end of the dire array with an offset of n,
      // representing their vote in the next round.
      dire.push(dire[0] + n);
    }
    // Remove the first senator from each party's array, since they have voted in this round.
    radiant.shift();
    dire.shift();
  }

  // Return the winner of the voting procedure based on which party has remaining votes.
  return (radiant.length > 0) ? "Radiant" : "Dire";
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(N).
 */