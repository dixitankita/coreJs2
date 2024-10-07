function displayInfo(name, role) {
    console.log(`Name: ${name}, Role: ${role}`);
}

displayInfo.call(null, 'Alice', 'Developer');

displayInfo.apply(null, ['Bob', 'Designer']);

function greet() {
    console.log(`Hello, my name is ${this.name} and I am a ${this.role}.`);
}

const context = {
    name: 'Charlie',
    role: 'Manager'
};

const boundGreet = greet.bind(context);
boundGreet();
