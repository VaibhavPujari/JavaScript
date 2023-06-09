

const arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];

const firstFruits =  arrayFruits[0];
console.log(`first Frutis is : ${firstFruits}`);

const arrayFruitsLength = arrayFruits.length;
const lastElement = arrayFruits[arrayFruitsLength-1];
console.log(`last Frutis is : ${lastElement}`); 

arrayFruits.splice(1,0,"Papaya");
console.log(`Add element -> 'Papaya' Before the element 'Banana' : ${arrayFruits}`);

arrayFruits.splice(4,1);
console.log(`Remove 'Mango' from array :${arrayFruits} `);

arrayFruits.push("Pineapple");
console.log(`Add element 'Pinapple' last position : ${arrayFruits}`);

arrayFruits.splice(4,0,"Dragon Fruit");
console.log(`Dragon fruit before Water melon ${arrayFruits}`);

arrayFruits.splice(2,1,"Kiwi");
console.log(`Replace  an Element 'Orange' with 'Kiwi' : ${arrayFruits}`);

const a = arrayFruits.slice(1,4);
console.log(`Log the elements from index 1 to 4 : ${a}`);

const threelmt = arrayFruits.splice(4);
console.log(`last 3 element is : ${threelmt}`);