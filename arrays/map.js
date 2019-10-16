const numbers = [1, 2, 3, 4];

console.log(numbers.map(number => String(number)));

console.log(numbers.map(number => number + 2));

console.log(numbers.map((number, index) => {
    const numberToAdd = index
        ? numbers[index - 1]
        : 0;
    return number + numberToAdd;
}));
