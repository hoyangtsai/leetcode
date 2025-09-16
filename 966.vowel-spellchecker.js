/*
 * @lc app=leetcode id=966 lang=javascript
 *
 * [966] Vowel Spellchecker
 */

// @lc code=start
/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function(wordlist, queries) {
  const exactMatch = new Set(wordlist);
  const caseInsensitiveMap = new Map();
  const vowelErrorMap = new Map();
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  function devowel(word) {
    let devoweled = '';
    for (const ch of word) {
      if (vowels.has(ch)) {
        devoweled += '*';
      } else {
        devoweled += ch;
      }
    }
    return devoweled;
  }

  for (const word of wordlist) {
    const lowerWord = word.toLowerCase();
    if (!caseInsensitiveMap.has(lowerWord)) {
      caseInsensitiveMap.set(lowerWord, word);
    }

    const devoweledWord = devowel(lowerWord);
    if (!vowelErrorMap.has(devoweledWord)) {
      vowelErrorMap.set(devoweledWord, word);
    }
  }

  const result = [];
  for (const query of queries) {
    if (exactMatch.has(query)) {
      result.push(query);
      continue;
    }

    const lowerQuery = query.toLowerCase();
    if (caseInsensitiveMap.has(lowerQuery)) {
      result.push(caseInsensitiveMap.get(lowerQuery));
      continue;
    }

    const devoweledQuery = devowel(lowerQuery);
    if (vowelErrorMap.has(devoweledQuery)) {
      result.push(vowelErrorMap.get(devoweledQuery));
      continue;
    }

    result.push('');
  }

  return result;
};
// @lc code=end

