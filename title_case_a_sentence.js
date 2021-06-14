//split string into array of words
//set as ArrayOfWords
//lowercase each element
//isolate first letter of each item in ArrayOfWords
//capitalise first letter
//rejoin first letter with rest of words
//rejoin arrayOfWords into string
//return string

// function titleCase(str) {
//   let arrayOfWords = str.toLowerCase().split(" ");
//   // console.log(arrayOfWords)
//   let arrayOfCapitalisedWords = [];
//   for (let i = 0; i < arrayOfWords.length; i++) {
//     arrayOfCapitalisedWords.push(
//       arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].substring(1)
//     );
//   }
//   // console.log(arrayOfCapitalisedWords.join(" "))
//   return arrayOfCapitalisedWords.join(" ");
// }
function titleCase(str) {
  let arrayOfWords = str.toLowerCase().split(" ");

  let arrayOfCapitalisedWords = [];
  arrayOfWords.forEach((x) =>
    arrayOfCapitalisedWords.push(x.charAt(0).toUpperCase() + x.substring(1))
  );

  return arrayOfCapitalisedWords.join(" ");
}

titleCase("I'm a little tea pot");
