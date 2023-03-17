const calculatePressure = (density, depth) => {
    let pressure = Math.round(density * 9.8 * depth)
    return pressure
}

