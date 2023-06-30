
var greet = "Good Morning";

var includeResult = greet.includes("ing");
console.log("Is ing string available inside : ", includeResult);

var searchResult = greet.search("Mor");
console.log("Search result : ", searchResult);

var sliceResult = greet.slice(4, 6);
console.log("Slice Result is: ", sliceResult);

var subStringResult = greet.substring(4, 6);
console.log("Substring result is: ", subStringResult);

var greet = "Good Morning mate, How are you";
var resultSplit = greet.split(" ");
console.log(resultSplit);
console.log("Total number of Words: ",resultSplit.length);

var resultSplit = greet.split(",");
console.log(resultSplit);
console.log("Total number Parts: ",resultSplit.length);

var resultSplit = greet.split("");
console.log(resultSplit);
console.log("Total number of Charaters: ",resultSplit.length);


console.log(`---------------QUESTION BANK-------------------`);

var givenString = 'TCS the Indian IT Giant Company';
console.log(`Given String : ${givenString}`);

let reversedString = givenString.split('').reverse().join('');

console.log(reversedString);

console.log(`---vowels---`);

count = 0;

for (let index = 0; index < givenString.length; index++) {
    var char = givenString.charAt(index);
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "A" || char == "E" || char == "I" || char == "O" ||  char == "U") {
        console.log(char);
        count++;        
    }
    
}
console.log(`the vowels : ${count}`);

givenString.split(' ');
console.log(`the  total words in givenString ${givenString.length}`);