let favourite_fruits = ["Water Melon", "Mango", "apricot"];

if (isFruitExist("Water Melon")) {
  console.log("I love water melon");
}
if (isFruitExist("Banana")) {
  console.log("Bananas casue Uric Acid Issues, I think!");
}
if (isFruitExist("Mango")) {
  console.log("Mango is really a great fruit");
}
if (isFruitExist("Damson")) {
    console.log("Damson is sometimes sour")
}
if (isFruitExist("apricot")) {
  console.log("Apricot is just delightful");
}

function isFruitExist(fruit: string) {
  for (let i = 0; i < favourite_fruits.length; i++) {
    if (favourite_fruits[i] === fruit) {
      return true;
    }
  }
  return false;
}
