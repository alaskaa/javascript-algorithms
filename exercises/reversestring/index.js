// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//function reverse(str) {
//  return str.split("").reverse().join("");
//}

function reverse(str) {
  const reversed = [];

  str.split("").forEach(char => reversed.unshift(char));

  return reversed.join("");
}

module.exports = reverse;
