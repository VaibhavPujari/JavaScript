for (let index = 0; index < 10; index++) {
    console.log(`${index}`);
    if (index == 5) {
        break;
    }
    
}
console.log(`End Loop`);

//Using Interation

var iteration = 0;
for (let index = 0; index <= 10; index++) {
    iteration = iteration + 1;
    console.log(`Iteration start ${iteration}`);
    console.log(`${index}`);
    if (index == 5) {
        break;
    }
    console.log(`Iteration End ${iteration}`);
    
}
console.log(`End Loop`);