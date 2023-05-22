var sumOfQube = function (num) {
    sum = 0;
    for (let index = 1; index <=5 ; index++) {
        sum = sum + index*index*index;
        
    }
    console.log(`sum of Qube of no is ${sum}`);
}
sumOfQube(5)


function oddPositionedChars(givenString) {
    var str = " ";
    for (let index = 0; index < givenString.length; index++) {
        var char = givenString.charAt(index);
        if(index % 2 != 0) {
            str = str + char;
        }
        
    }
    console.log(`${str}`);
}
oddPositionedChars("Hard work always pays Back");
oddPositionedChars("Soon I will be Angulaer IT Champ");

var word = "I am very good IT Developer";

var count = 0;
for (let index = 0; index < word.length; index++) {
   var char = word.charAt(index);

   if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'A' ||
   char == 'E' || char == 'I' || char == 'O' || char == 'U') {
    console.log(char);
    count++;
   }
   
}
console.log(`Total Count Of Vowels : ${count }`);
