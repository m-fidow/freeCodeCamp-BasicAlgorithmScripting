//check target length
//use substring to return the ending of string
//  substring(startIndex) will be string.length - target.length
//  set as ending_of_string
//if target and ending_of_string are the same return true
//else, return false

function confirmEnding(str, target) {
  let endingOfString = str.substring(str.length - target.length);
  if (endingOfString === target) {
    return true;
  } else {
    return false;
  }
}
confirmEnding("Bastian", "n");
