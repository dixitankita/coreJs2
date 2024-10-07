const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort((a, b) => a - b);

const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);

let medianAge;
const midIndex = Math.floor(ages.length / 2);

if (ages.length % 2 === 0) {
    medianAge = (ages[midIndex - 1] + ages[midIndex]) / 2;
} else {
    medianAge = ages[midIndex];
}

const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;

const ageRange = maxAge - minAge;

const minAvgDiff = Math.abs(minAge - averageAge);
const maxAvgDiff = Math.abs(maxAge - averageAge);

console.log(`Sorted Ages: ${ages}`);
console.log(`Minimum Age: ${minAge}`);
console.log(`Maximum Age: ${maxAge}`);
console.log(`Median Age: ${medianAge}`);
console.log(`Average Age: ${averageAge.toFixed(2)}`);
console.log(`Range of Ages: ${ageRange}`);
console.log(`Absolute Difference (Min - Avg): ${minAvgDiff}`);
console.log(`Absolute Difference (Max - Avg): ${maxAvgDiff}`);
