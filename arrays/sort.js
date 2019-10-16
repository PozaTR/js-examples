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

const sorted = people.sort((personA, personB) => {
    if(personA.age < personB.age) {
        return -1
    }
    if(personA.age > personB.age) {
        return 1
    }
    return 0
})

console.log(sorted)