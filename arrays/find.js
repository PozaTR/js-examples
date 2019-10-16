const people = [
    {
        name: 'Pepe',
        lastName: 'Perez',
        age: 22
    }, {
        name: 'Rosa',
        lastName: 'Sanchez',
        age: 15
    }, {
        name: 'Inma',
        lastName: 'Solis',
        age: 55
    }
];

console.log(people.find(person => person.age>18))
console.log(people.findIndex(person => person.age>18))