function gradeCalculation(marks){
    
    if (marks==undefined || isNaN(marks) || marks<0 || marks>100) { // undefined, null
        console.log(`Invalid marks: ${marks}`);
    } else {
       console.log(`Valid marks : ${marks}`); 
       if (marks>=90) {
            console.log(`Fantastic marks : ${marks}, Your grade is A+`);
       } else if(marks>=75 && marks<=90){
        console.log(`Excellent marks : ${marks}, Your grade is A`);       
       } else if(marks>=50 && marks<=75){
        console.log(`Good marks : ${marks}, Your grade is B`);
       }else if(marks>=35 && marks<=50){
        console.log(`Marks marks : ${marks}, Your grade is C,Need improvement`);
       }
    }

    
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
// Handling invalid inputs
gradeCalculation(undefined);
gradeCalculation(null);
gradeCalculation(NaN);




// dayNumber
// 1  - Monday
// 2  - Tuesdays
// 3  - Wed
// 4 - Thursday
// 5 - Friday
// 6 - Saturday
// 7 - Sunday

// function weekDay(dayNum) {
//     switch (dayNum) {
//       case 1:
//         console.log(`Day is: Monday as day number is ${dayNum}`);
//         break;
//       case 2:
//         console.log(`Day is: Tuesday as day number is ${dayNum}`);
//         break;
//       case 3:
//         console.log(`Day is: Wednesday as day number is ${dayNum}`);
//         break;
//       case 4:
//         console.log(`Day is: Thursday as day number is ${dayNum}`);
//         break;
//       case 5:
//         console.log(`Day is: Friday as day number is ${dayNum}`);
//         break;
//       case 6:
//         console.log(`Day is: Saturday as day number is ${dayNum}`);
//         break;
//       case 7:
//         console.log(`Day is: Sunday as day number is ${dayNum}`);
//         break;
//       default:
//         console.log(`Invalid input ==>  ${dayNum}`);
//         break;
//     }
//   }
//   weekDay(1);
//   weekDay(2);
//   weekDay(3);
//   weekDay(7);
  
//   weekDay(null);
//   weekDay(undefined);
//   weekDay(NaN);