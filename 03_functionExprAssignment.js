var square = function (value1){
    console.log();
    return value1*value1;
}

console.log("square is: ",square(5));
console.log("square is: ",square(6));
console.log("square is: ",square(25));
console.log("square is: ",square(100));

console.log("------------------------------------------------------------------------");

 var type = function typeChk(value){
     console.log(typeof value);
 }
 type(5);
console.log("------------------------------------------------------------------------");

var area = function areaOfPlot( length, width ){
    var result=length*width;
    console.log("Area of plot is ", result);
    
}

area(499,917);

console.log("------------------------------------------------------------------------");

var swappinFunction = function swapvalues(value1, value2){

    console.log("Befor swap : ", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After swap : ", value1, value2);
}
swappinFunction('Virat','Anushka');
swappinFunction(1000,2000);

console.log("------------------------------------------------------------------------");

var result= "JS the most popular language of internet";
console.log(" Total charcters available in string is : ",result.length);
console.log(" Charcters at index 6 : ",result.charAt(6));
console.log(" Charcters at index 11 : : ",result.charAt(11));
console.log(" there is space at 6 and 11 index so it's displaying blank");
console.log(" Character at last  : ",result.charAt(result.length -1));
console.log(" Very first character in string is : ",result.charAt(0));
console.log(" Total charcters available in string is : ",result.length," and square of its length is :", result.length*result.length);
console.log("------------------------------------------------------------------------");



