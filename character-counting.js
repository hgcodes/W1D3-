function countLetters(string) {
  var output = {};


  for (var i = 0; i < string.length; i++) {
    var char = string[i];

    if (char === " ") {
      continue;
    }
    // output[char] = 1; // can't push to an object bc key has to be set

    if (output[char]) {
      output[char].push(i);
    } else {
      output[char] = [i];
    }

// if the value is unique, create an array and put the index value in it.
// and put the array into the object

// if (output[char]) {
//       output[char] += 1;
//     } else {
//       output[char] = 1;
//     }

  }
  return output;
}

console.log(countLetters("lighthouse in the house") );

// output = {
// l: 0,
// i: 1,
// g: 2,
// h: [3, 5]
// t: 4,
// o: 6,
// u: 7,
// s: 8,
// e: 9

// }

// return all the indices in the string where each character is found
// So for each letter, we're no longer returning just one number
// to represent its number of occurrences, but rather (potentially)
// multiple numbers to represent all the places in the string that it shows up.
