var numOne = 100;
var numTwo = 200;

function swap(valuesOne,valuesTwo){
    console.log("Before swap : ",valuesOne,valuesTwo);

    var temp = valuesOne;
    var valuesOne = valuesTwo;
    var valuesTwo= temp;

    console.log("After Swap : ",valuesOne,valuesTwo);
}
swap(100,200);

console.log("-------------------------------------------------------------------------");

function addition(num1,num2){
    var result = num1 + num2;
    return result;
}
var returnValue = addition(100,200);
console.log("Addition is : ", returnValue);