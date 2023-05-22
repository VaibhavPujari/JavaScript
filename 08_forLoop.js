for (let index = 0; index <= 10; index++) { // index = 11
    console.log(index); // 0 1  2 ... 10 
}
console.log("After loop");

// WAP to get 100 to 80 in revrese order

for (let index = 100; index >=80;index--){
    console.log(index);
}

//WAP to get the table of 19
for (let index = 19; index <=190;index = index+19){
    console.log(index);
}
//WAP to get the table of 8
for (let index = 8; index <=80;index = index + 8){
    console.log(index);
}


//WAP to Reverse the String "JavaScript"

var str = "JavaScript";
var revreseString = " ";
for (let index = 9; index >=0; index--){
    var char = str.charAt(index);
    revreseString = revreseString.concat(char);
}
console.log(revreseString);


