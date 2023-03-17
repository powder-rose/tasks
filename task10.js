let result = ''

const checkVehicle = (wheels, weight) => {
    if (wheels === 2 && weight < 100) {
        result = 'Парковка разрешена.'
        console.log(result)
    } else {
        result = 'Вам здесь не место!'
        console.log(result)
    }
}

checkVehicle(4, 500)