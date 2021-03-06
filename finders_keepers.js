//loop though array
//check if func is true for each element of the array
//if true, return array element
//if false, return undefined

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    // num = arr[i]
    if (func(arr[i])) {
      num = arr[i];
      return num;
    }
  }
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
