function factorialOfNum(num) {

    let factorial = 1;
     for (let index = num; index >= 1; index--) {

        factorial = factorial*index;
        
     }
    console.log(`factorial is :${factorial}`);
}
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);

