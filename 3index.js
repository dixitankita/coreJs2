const contacts = new Map();

function addContact(name, age, email, location) {
    contacts.set(name, { age, email, location });
}

function getContactByName(name) {
    if (contacts.has(name)) {
        return contacts.get(name);
    } else {
        return `Contact with name "${name}" not found.`;
    }
}

addContact('Alice', 30, 'alice@example.com', 'New York');
addContact('Bob', 25, 'bob@example.com', 'Los Angeles');
addContact('Charlie', 28, 'charlie@example.com', 'Chicago');

console.log(getContactByName('Alice'));
console.log(getContactByName('David'));
