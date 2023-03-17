let lastNumber = 10;
let sum = 0;


const countNumbers = () => {
    
    for(let i = 0; i <= lastNumber; i++) {
        sum = sum + i
        console.log(sum)
    }

}

countNumbers()