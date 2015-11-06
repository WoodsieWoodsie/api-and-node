'use strict'

exports.superCounter = string => {
  let newString = decodeURIComponent(string);
  let words = newString.split(" ").length;
  let characters = newString.split("").length;
  let spaces = newString.match(/ /g).length;
  let avgLength = newString.match(/\w/g).length/words;

  var obj = {words: words, characters: characters, spaces: spaces, avgLength: avgLength};

  return obj; 
}