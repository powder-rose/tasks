let flightDistance = 7260;
let averageSpeed = 600;

let flightHours

 const countHours = (distance, speed) => {
    flightHours = Math.round(distance / speed)
    return flightHours
 }

console.log(countHours(flightDistance, averageSpeed))