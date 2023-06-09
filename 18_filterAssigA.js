
const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];

console.log(`----Greater than 50 Number filter----`);
const newArrayNum = arrayNumbers.filter( (element) => {
    return element>50;
});
console.log(newArrayNum);

console.log(`----Even Number filter----`);
const evenArrayNum = arrayNumbers.filter((element) => {
    return element % 2 == 0;
});
console.log(evenArrayNum);

console.log(`----Odd Number filter----`);
const oddArrayNum = arrayNumbers.filter( (element) => {
    return element % 2 != 0;
});
console.log(oddArrayNum);

console.log(`----multiply by 5 filter----`);

const mulArrayNum = arrayNumbers.filter( (element) => {
    return element % 5 === 0;
});
console.log(mulArrayNum);

// console.log(`----between 20 to 25 number----`);

// const between20to25 = arrayNumbers.filter( (element) => {
//     if (element>20 && element<25) {
//         console.log(element);
//     };
// });
// console.log(between20to25);
