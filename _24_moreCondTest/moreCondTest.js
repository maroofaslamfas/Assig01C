"use strict";
// • Testing for equality and inequality with strings
let test1 = "tested";
console.log(`\t\tTest 1\nIs test1 == tested, | I predict true \n and the result is "${test1 == "tested"}"`);
console.log(`\t\tTest 2\nIs test1 != tested, | I predict false \n and the result is "${test1 != "tested"}"`);
// • Testing using the lower case function
let test2 = "maroof";
console.log(`\t\tTest 3\nIs test2 is all in lower case, | I predict true \n and the result is "${test2 == test2.toLowerCase()}"`);
console.log(`\t\tTest 4\nIs test2 is all in upper case, | I predict false \n and the result is "${test2 == test2.toUpperCase()}"`);
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let test3 = 7;
console.log(`\t\tTest 5\nIs test3 == 7, | I predict true \n and the result is "${test3 == 7}"`);
console.log(`\t\tTest 6\nIs test3 != 7, | I predict false \n and the result is "${test3 != 7}"`);
console.log(`\t\tTest 7\nIs test1 > 4, | I predict true \n and the result is "${test3 > 4}"`);
console.log(`\t\tTest 8\nIs test1 < 4, | I predict false \n and the result is "${test3 < 4}"`);
console.log(`\t\tTest 9\nIs test1 <= 9, | I predict true \n and the result is "${test3 <= 9}"`);
console.log(`\t\tTest 10\nIs test1 >= 9, | I predict false \n and the result is "${test3 >= 9}"`);
// • Tests using "and" and "or" operators
let test4 = 5;
console.log(`\t\tTest 11\nIs test4 >=5 and test4 < 10 , | I predict true \n and the result is "${test4 >= 5 && test4 < 100}"`);
console.log(`\t\tTest 12\nIs test4 >=2 and test4 < 5 , | I predict false \n and the result is "${test4 >= 2 && test4 < 5}"`);
console.log(`\t\tTest 13\nIs test4 >=6 or test4 < 10 , | I predict true \n and the result is "${test4 >= 6 || test4 < 10}"`);
console.log(`\t\tTest 14\nIs test4 >=10 or test4 < 5 , | I predict false \n and the result is "${test4 >= 10 || test4 < 5}"`);
// • Test whether an item is in a array
let arr1 = ["one", "three", "four", "five", "six"];
let ele = null;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == "three") {
        ele = arr1[i];
    }
}
if (ele != null) {
    console.log("Element found"); // Element Found will be printed only when element exists inside the array
}
else {
    console.log("No such element exist");
}
// • Test whether an item is not in a array
ele = null;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == "two") {
        ele = arr1[i];
    }
}
if (ele != null) {
    console.log("Element found"); // Element Found will be printed only when element exists inside the array
}
else {
    console.log("No such element exist");
}
