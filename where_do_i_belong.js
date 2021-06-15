//push num into arr
//sort arr from lowest to highest
//return index of num
function getIndexToIns(arr, num) {
  arr.push(num);
  let sorted = arr.sort((a, b) => a - b);
  return sorted.indexOf(num);
}

getIndexToIns([40, 60], 50);
