//if typeof bool is boolean return true
//else return false
// function booWho(bool) {
//   if (typeof bool == "boolean") {
//     return true;
//   } else {
//     return false;
//   }
// }
function booWho(bool) {
  return typeof bool == "boolean" ? true : false;
}

booWho(null);
