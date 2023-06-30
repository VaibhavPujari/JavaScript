var calculation = function squareOfWordLength(str) {
  console.log("length of the string", str.length);
  var sqr = str.length * str.length;
  return sqr;
};
console.log("square is : ", calculation("JavaScript"));
console.log("square is : ", calculation("Google Chrome"));
console.log("square is : ", calculation("Developer Smart"));

console.log("-------------------------------------------");

function stringCal() {
  var str = "I am Angular Developer";
  var len = str.length;
  var totalWords = str.split(" ");
  var totalWordsLen = totalWords.length;
  console.log("Result of Divide is : ", len / totalWordsLen);
  console.log("Result of Multiply is : ", len * totalWordsLen);
}
stringCal();
console.log("-------------------------------------------");
