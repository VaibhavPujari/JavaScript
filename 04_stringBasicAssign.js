function stringBasic() {
  console.log("My Dream Company is Infosys");

  console.log(
    "----------------------------------------------------------------------------"
  );

  var myHobbies = "vollleyBall cricket Programming";
  console.log("Hobbyies :", myHobbies);
  var result = myHobbies.length;
  console.log("Total WOrd : ", result);
}
stringBasic();

console.log(
  "----------------------------------------------------------------------------"
);

function stringHandsOn(givenString){
  console.log(givenString);
  var result = givenString.length;
  console.log("Total length of String is : ",result);
  
    var trimString=givenString.trim();
    var result1 = givenString.trim().length;
    
    console.log("trim string : ",givenString.trim());
    console.log("length of trim string : ",givenString.trim().length);
    console.log("Total number of spaces removed form string is :",result-result1);
    console.log("firstCharater After trim string : ",trimString.charAt(0));
    console.log("lastCharater After trim string : ",trimString.charAt(result1-1));
    var totalWords= trimString.split(' ');
    console.log("total word of String :",totalWords.length);
    console.log("index of word of good :",trimString.indexOf('good'));

    console.log("String Starts with Hey :",trimString.startsWith('Hey'));
    console.log("String Ends with Up :",trimString.endsWith('up'));

    console.log("")
}
stringHandsOn("   Hey you are doing good, keep it up   ");


