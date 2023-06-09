
const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];

arrayNumbers.forEach( (element,index ) => {
    console.log(index,element);
});

console.log(`------The Positive Number are---------`);

arrayNumbers.forEach( (element) => {
    if (element>0) {
        console.log(element);
    }
});

console.log(`-----The Negative numbers add into new array-----`);

const arrayNums = [];

arrayNumbers.forEach( (element) => {
    if(element<0){
        arrayNums.push(element);
    }
});
arrayNums.forEach(element => console.log(element));

console.log(`-----Even Numbers------`);

arrayNumbers.forEach( (element,index) => {
    if (index % 2 == 0) {
        console.log(element);
    }
});

console.log(`------------`);
let sum = 0;

for (let i = 0; i < arrayNumbers.length; i++) {
  sum += arrayNumbers[i];
}

console.log('The sum of all elements in the array is:', sum);