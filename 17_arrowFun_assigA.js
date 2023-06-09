let msg = () => {
    console.log("Good morning, Today is Monday");
};
msg();

let multiply = (v1,v2,v3=1) => {
    let result = v1*v2*v3;
    console.log(`Multiplication is :${result}`);
};
multiply(5,5,2);
multiply(10,4);

let addition = (n1,n2,n3,n4,n5) =>{
    let result = n1+n2+n3+n4+n5;
    console.log(`${result}`);
}
addition(100,100,200,349,756);
addition("I am"," learning", " ES6", " features", " in depath");