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

const adults= [];

for (let person of people) {
    console.log(person.name, person.lastName, '-', person.age > 18 ? 'Adulto' : 'Menor');
    if (person.age > 18) {
        adults.push(person)
    }
}

console.log(adults)

for (let i = 0; i < people.length; i++) {
    if (people[i].age > 18) {
        console.log(people[i].name)
    } else {
        console.log(people[i].name, ' es menor');
        i = people.length
    }
}


let modifiedMap = [];
modifiedMap = people.map(person => ({ ...person, isAdult: person.age>18 }))

const modifiedFor = [];
for (let person of people) {
    modifiedFor.push({...person, isAdult: person.age > 18})
}
console.log('____');
console.log(modifiedMap)
console.log(modifiedFor)