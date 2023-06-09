
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];

const arrayTransformed = arrayNumbers.map( (element) => {
    return element + 10;
});
console.log(arrayTransformed);

console.log(`---square the each array element---`);

const arrayTrans = arrayNumbers.map( (element) => {
    return element*element;
} );
console.log(arrayTrans);

console.log(`----Add index value----`);

const indexArray = arrayNumbers.map( (element, index) => {
    return element + index;
});
console.log(indexArray);