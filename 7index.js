const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    calculate: function(operation, num1, num2) {
        return this[operation](num1, num2);
    }
};

const additionResult = calculator.calculate.call(calculator, 'add', 5, 3);
console.log(`Addition Result: ${additionResult}`);

const multiplicationResult = calculator.calculate.apply(calculator, ['multiply', 4, 2]);
console.log(`Multiplication Result: ${multiplicationResult}`);

const discountCalculator = {
    discountPercentage: 10,
    applyDiscount: function(price) {
        return price - (price * this.discountPercentage / 100);
    }
};

const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);
const discountedPrice = calculateDiscount(100);
console.log(`Discounted Price: ${discountedPrice}`);
