var gretter = function gretterNumber(num1, num2){
if(num1>num2){
    console.log("Num1 is gretter ");
}
else if(num2>num1){
    console.log("Num2 is gretter");
}
else{
    console.log("numbers are equal");
}
}

gretter(10,-10);
gretter(800,899);

console.log("--------------------------------------------------------------");

function checkEvenOrOdd(value){

    if(value%2 == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkEvenOrOdd(29));
console.log(checkEvenOrOdd(44));
console.log(checkEvenOrOdd(0));
console.log(checkEvenOrOdd(101));

console.log("--------------------------------------------------------------");

function wordLength(str){
    if(str.length % 2 == 0){
        return "EVEN";
    }
    else{
        return "ODD";
    }
}
console.log(wordLength("JavaScript"));
console.log(wordLength("developer"));
console.log(wordLength("Google"));