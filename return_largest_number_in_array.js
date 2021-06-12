//loop through the big array
//loop thought the small array
//sort numbers from lowest to highest
//push highest number in finalarray
//return final array

function largestOfFour(arr) {
  let finalArray = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumberInEachArray = arr[i].sort((a, b) => {
      return b - a;
    });
    finalArray.push(largestNumberInEachArray[0]);
  }
  return finalArray;
}

function largestOfFour(arr) {
  let finalArray = [];
  arr.forEach((arr) => {
    let largestNumberInEachArray = arr.sort((a, b) => {
      return b - a;
    });
    finalArray.push(largestNumberInEachArray[0]);
  });

  return finalArray;
}
largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
