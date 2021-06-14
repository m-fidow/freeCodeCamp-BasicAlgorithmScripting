function createQuote(quote, callback) {
  callback(quote);
}
function logQuote(quote) {
  console.log(quote);
}
createQuote("hello", logQuote);

createQuote("hello", function (quote) {
  console.log(quote);
});
