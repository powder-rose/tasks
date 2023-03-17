let startNumber = 1;
let multiplier = 4;
let quantity = 7;

let numbers

const countNumbers = (startNumber, multiplier, quantity) => {
    console.log(startNumber)
for (let i = startNumber; i <= quantity; i++) {
    numbers = i * multiplier 
    console.log(numbers)
}
}

countNumbers(1, 4, 7)
