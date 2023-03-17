let groceries = ['чай', 'шпроты', 'печенье', 'сахар', 'чипсы'];
let shoppingList = '';


const makeList = (groceries) => {
    shoppingList = groceries.join(', ')
    console.log(shoppingList)
}

makeList(groceries)
