"use strict";
function freq(strings, divider) {
  divider = typeof divider == "string" ? divider : " ";
  strings = Array.isArray(strings) ? strings : [strings];

  let frequency = {};
  let joined = strings.join(divider);
  if (joined === "") return [];
  let array = joined.split(divider);
  while (array.length) {
    let key = array.pop();
    frequency[key] = frequency[key] ? frequency[key] + 1 : 1;
  }
  return Object.keys(frequency)
    .sort((a, b) => {
      return frequency[b] - frequency[a];
    })
    .map((key) => {
      return [key, frequency[key]];
    });
}

module.exports = freq;
