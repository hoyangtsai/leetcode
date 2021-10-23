
let mod = 1000000007
let N = 1000001

function Precomputefact(fac) {
  let ans = 1;

  // Iterate in the range [1, N]
  for (let i = 1; i <= N; i++) {
    ans = (ans * i) % mod;
    fac[i] = ans;
  }

  return fac;
}

function isVowel(a) {
  if (a == 'A' || a == 'E' || a == 'I' || a == 'O' || a == 'U')
    return true;
  else
    return false;
}

function countAnagrams(s) {
  let n = s.length;

  let fac = {};
  Precomputefact(fac);

  let count = {};

  // Store the count of
  // vowels and consonants
  let vo = 0, co = 0;

  // Iterate through all
  // characters in the string
  for (let i = 0; i < n; i++) {

    // Update the frequency
    // of current character
    count[s[i]] = (count[s[i]] || 0) + 1;

    // Check if the character
    // is vowel or consonant
    if (isVowel(s[i]))
      vo++;
    else
      co++;
  }

  console.log('count =>', count);

  // // Check if ΣC==ΣV+1 or ΣC==ΣV
  // if ((co == vo + 1) || (co == vo)) {
  //   let deno = 1;

  //   // for (auto c : count) {
  //   for (const c of count) {
  //     // Multiply denominator by factorial
  //     // of counts of all letters
  //     // deno = (deno * fac[c.second]) % mod;
  //   }

  //   let nume = fac[co] % mod;
  //   nume = (nume * fac[vo]) % mod;

  //   let ans = nume / deno;

  //   console.log('ans =>', ans);
  // } else {

  //   console.log(0);
  // }
}


countAnagrams('AABCY');
