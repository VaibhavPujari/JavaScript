

const array = [10, 5, "a", "b", "h", 11];

const numbers = array.filter((item) => typeof item === "number");

numbers.sort((a, b) => a - b);

console.log(numbers);

const alphabet = array.filter((item) => typeof item === "string");

alphabet.sort();

console.log(alphabet);
