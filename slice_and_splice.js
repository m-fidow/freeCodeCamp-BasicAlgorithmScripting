//copy arr1 into arr2 from n index
//create a copy of arr2 so that the original remains the same
//loop through arr1 and insert each item into copy of array 2 starting from n using splice
//return copy of arr2 that now is transformed because of splice

function frankenSplice(arr1, arr2, n) {
  // let newArray = [secondArray[0]]

  let copyOfSecondArray = arr2.slice(0);
  for (let i = 0; i < arr1.length; i++) {
    copyOfSecondArray.splice(n, 0, arr1[i]);
    n++;
  }
  return copyOfSecondArray;
  // console.log({slicedArray})
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
