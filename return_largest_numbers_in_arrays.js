//declare an empty array
//Set as largestFourArray
//loop though big array to access individual arrays
//loop though individual array
//sort numbers from highest to lowest
//push first item of array into largestFourArray
//return largestFourArray
// function largestOfFour(arr) {
//   let largestFourArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     let smallArray = arr[i];
//     // console.log(smallArray)
//     let sortedArray = smallArray.sort((a, b) => b - a);
//     largestFourArray.push(sortedArray[0]);
//   }
//   return largestFourArray;
// }
function largestOfFour(arr) {
  let largestFourArray = [];
  for (let i = 0; i < arr.length; i++) {
    largestFourArray.push(arr[i].sort((a, b) => b - a)[0]);
  }
  return largestFourArray;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
