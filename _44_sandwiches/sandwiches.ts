
function itemOnSandwich (arr: string[]){
    console.log(`Please confirm your order with the following items in your sandwiche: `)
    for (let i = 0; i<arr.length; i++){
        console.log(arr[i]," \r");
    }
}

console.log(`1st Call to Function: `)
itemOnSandwich(["Onion", "Carrot", "Cabbage", "Chicken"]);

console.log(`2nd Call to Function: `)
itemOnSandwich(["Onion", "Carrot", "Cabbage", "Chicken", "Hot Sauce", "Buffalo Sauce"]);

console.log(`3rd Call to Function: `)
itemOnSandwich(["Onion", "Carrot", "Cabbage", "Chicken", "Fish Curry"]);