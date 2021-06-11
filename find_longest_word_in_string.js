// Return the length of the longest word in the provided sentence.

// Your response should be a number.
//split string into array
//loop though array
//sort items in decending order by length
//return length first item of sorted array
function findLongestWordLength(str) {
  let arrayOfWords = str.split(" ");
  let sorted = arrayOfWords.sort(function (a, b) {
    return b.length - a.length;
  });
  return sorted[0].length;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
