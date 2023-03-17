let age = 5;
let ageGroup;

const findAgeGroup = (age) => {
    if (age <= 1) {
        ageGroup = 'Котята'
    }
    if (age > 1 && age <= 3) {
        ageGroup = 'Молодые коты'
    }
    if (age > 3 && age <= 7) {
        ageGroup = 'Коты средних лет'
    }
    if (age > 7) {
        ageGroup = 'Почтенные коты'
    }

return ageGroup
}

findAgeGroup(age)