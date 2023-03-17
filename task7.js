let number = 15

const findDivider = (number) => {
 for (i = 2; i < number; i++) {
    if (number % i === 0) {
        console.log(i)
    }
 }
}

findDivider(number)

