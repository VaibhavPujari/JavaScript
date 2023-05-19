function display() {
  console.log("First Function With No Argument and No Return type");
  console.log("Secound Function With No Argument and No Return type");
}
display();

console.log(
  "---------------------------------------------------------------------------"
);

function personalDetails(firstName, lastName, collegeName) {
  console.log(`My firstName is : ${firstName}`);
  console.log(`My lastName is : ${lastName}`);
  console.log(`My collegeName is : ${collegeName}`);
}
personalDetails("vaibhav", "pujari", "Shiavji University,Kop");

console.log("---------------------------------------------------------------------------");

function swapValuesDude(values1, values2) {
  var values1 = "Virat";
  var values2 = "Anushka";
  console.log("Before swapName is : ", values1, " :", values2);
  var temp = values1;
  var values1 = values2;
  var values2 = temp;
  console.log("After swapName is :", values1, " :", values2);
}
swapValuesDude();

console.log("---------------------------------------------------------------------------");

function swapValuesDude(values1, values2) {
    var values1 = 1000;
    var values2 = 2000;
    console.log("Before swapName is : ", values1, " :", values2);
    var temp = values1;
    var values1 = values2;
    var values2 = temp;
    console.log("After swapName is :", values1, " :", values2);
  }
  swapValuesDude();

  console.log("---------------------------------------------------------------------------");

  function addThreeValuees(value1,value2,value3){
    var value1 = 10.23;
    var value2 = 600;
    var value3 = 40;
    var result = value1+value2+value3;
    console.log(`${result}`);
  }
  addThreeValuees();

  console.log("---------------------------------------------------------------------------");

  function addThreeValues(one,two,three){
    var one1 = "Hello";
    var two2 = "Good";
    var three3 = "Morning";
    var result = one1 + two2 + three3;
    console.log(`${result}`);
  }
  addThreeValues();