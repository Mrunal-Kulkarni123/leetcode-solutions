/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (!map[t[j]]) {
      return false;
    } else {
      map[t[j]]--;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== 0) return false;
  }
  return true;
};
