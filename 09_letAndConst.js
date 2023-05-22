var myName = "Vaibhav"; //variable declaration & Initalization

var myName = "Vaibhav Pujari"; //Redeclaration

console.log(`${myName}`);

let collegeName = "Dot";

let collegeNam = "Dot,Kop"; //Redeclartion not allowed

console.log(`${collegeName}`);

const PI = 3.14;
// PI = 3.1412; //Update not allowed
console.log(`${PI}`);

// scope == Accessibility

let age = 25;
if (age == 25) {
  var city = "Pune";
}
console.log(`City ${city}`);

function show() {
  var country = "India";
  console.log(`country ${country}`);
}
show();

function show() {
  //var country = "India"
  let age = 25;
  if (age == 25) {
    var city = "Pune";
    const PIN = 431101;
    var village = "Mulsi";
    console.log(`country ${city}`);
    console.log(`country ${village}`);
    console.log(`country ${PIN}`);
  }

  //console.log(`country ${country}`);
}
show();
