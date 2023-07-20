"use strict";
let oNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < oNum.length; i++) {
    if (oNum[i] % 10 == 1) {
        console.log(`${oNum[i]}st`);
    }
    else if (oNum[i] % 10 == 2) {
        console.log(`${oNum[i]}nd`);
    }
    else if (oNum[i] % 10 == 3) {
        console.log(`${oNum[i]}rd`);
    }
    else {
        console.log(`${oNum[i]}th`);
    }
}
