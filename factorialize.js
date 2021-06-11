//start at 1
//multiply number to the following number
//multiply result to following number until you reach num
// function factorialize(num) {
//   let result = 1;
//   for (let i = 0; i < num; i++) {
//     result *= i + 1;
//   }
//   return result;
// }

let factorialize = (num) => {
  let result = 1;
  for (let i = 0; i < num; i++) {
    result *= i + 1;
  }
  return result;
};
factorialize(5);
