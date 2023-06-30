

const arrayNums = [10, 5, 70, 90, 100, 30 ];

arrayNums.forEach( ( currentValue, index, array ) => {
    console.log(`${currentValue}, ${index}`);
    console.log(array);
}  );

console.log(" ======== Executing forEach() with only required arguments==========");
arrayNums.forEach( (currentValue) => {
    console.log(currentValue);
} );

console.log(`------- example array-------`);

const array = [1,6,5,3,11,23,4]

array.forEach( (element) => {
    console.log(element);
});
console.log(`----------------`);
array.forEach( (element,index)=>{
    if (element % 2 !== 0) {
        console.log(element,index);
    }
});
console.log(`----------------`);
//array.reverse();
console.log(array);

console.log(`----------------`);
console.log(array);
//const lastTrdElement = array[array.length-3];
//console.log(lastTrdElement);
console.log(`-----Adding first element-----`);

array.unshift(100);
console.log(array);

array.push(2);
console.log(array);