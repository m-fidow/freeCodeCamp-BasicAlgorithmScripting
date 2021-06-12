//split string into array
//set as arrayOfLetters
//if arrayOfLetters.length > num
//splice arrayOfLetters (0,num)
//set as splicedArray
//return join splicedArray and add truncation signs at the end

// function truncateString(str, num) {
//   let arrayOfLetters = str.split("");
//   if (arrayOfLetters.length > num) {
//     let spliced = arrayOfLetters.splice(0, num);
//     return spliced.join("") + "...";
//   } else {
//     return str;
//   }
// }
function truncateString(str, num) {
  let arrayOfLetters = str.split("");
  return arrayOfLetters.length > num
    ? arrayOfLetters.splice(0, num).join("") + "..."
    : str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);
