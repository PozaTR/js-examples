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

const appData = people.reduce((acc, person, index) => {
    const isAdult = person.age > 18;
    if (isAdult) {
        acc.adultsQty++;
        acc.adults.push(person);
    }else {
        acc.minorsQty++;
        acc.minors.push(person);
    }
    return acc
}, {
    adultsQty: 0,
    minorsQty: 0,
    adults: [],
    minors: []
})

console.log(appData)