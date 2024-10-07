const uniqueNumbers = new Set([1, 2, 3, 4, 5, 2, 3, 6, 7]);
const squaresMap = new Map();

uniqueNumbers.forEach(number => {
    squaresMap.set(number, number * number);
});

console.log('Unique Numbers:', Array.from(uniqueNumbers));
console.log('Corresponding Squares:', Array.from(squaresMap.entries()));
