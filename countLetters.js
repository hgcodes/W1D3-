function countLetters(string) {
  var output = {};

  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if (char === " ") {
      continue;
    }
    // output[char] = 1; // can't push to an object bc key has to be set

    if (output[char]) {
      output[char] += 1;
    } else {
      output[char] = 1;
    }

  }

  return output;

}

console.log(countLetters("lighthouse in the house") );
