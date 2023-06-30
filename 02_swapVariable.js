var num1 = 100;
var num2 = 200;

console.log("Before Swap num1 :", num1, "num2 :", num2);

var temp = num1;
var num1 = num2;
var num2 = temp;

console.log("After Swap num1:", num1, "num2 :", num2);

console.log(
  "========================================================================="
);

var nameSweety = "Sweety";
var nameCutie = "Cutie";

console.log("Before Swap Name : ", nameSweety, nameCutie);

var temp = nameSweety;
var nameSweety = nameCutie;
var nameCutie = temp;

console.log("After Swap Name :", nameSweety, nameCutie);

console.log("=============================================================");

var num1 = 100;
var num2 = 200;
var num3 = 300;

console.log("Before Swap num1 :", num1, "num2 :", num2, "num3 :", num3);

var temp = num1;
var num1 = num2;
var num2 = num3;
var num3 = temp;

console.log("After Swap num1:", num1, "num2 :", num2, "num3 :", num3);

console.log(`-----Without using Third variables Swap-------`);

var a = 100;
var b = 200;

a = a + b;
b = a - b;
a = a - b;

console.log(`${a},${b}`);