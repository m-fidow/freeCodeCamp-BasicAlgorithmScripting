//create an empty erray
//if num is < 0 return ""
//create for loop
//push to array as many times as num
//
//join array
//return joined array

function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return "";
  }
  let array = [];
  for (let i = 0; i < num; i++) {
    array.push(str);
  }
  return array.join("");
}

repeatStringNumTimes("abc", 3);
