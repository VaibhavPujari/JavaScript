
const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];

const arrayTrans = arrayNumbers.map( (num) => {
    console. log( `Even numbers are ${ num. filter( n => ! isOdd(n))}`);
} );
console.log(arrayTrans);