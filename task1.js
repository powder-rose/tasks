let euroRate = 74;
let dollarRate = 63;

let euroAmount = 500;
let dollarAmount = 2500;

let roublesAmount 

const countRubles = (euro, dollar) => {
    roublesAmount = (euroRate * euro) + (dollarRate * dollar)
    return roublesAmount
}
 
console.log(countRubles(euroAmount, dollarAmount))
