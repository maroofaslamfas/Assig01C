"use strict";
{
    // code from exercise 16, and the exercise 17 starts from line 50
    let guests = ["Ali", "AbuBakar", "Khan", "Alvi"];
    for (let i = 0; i < guests.length; i++) {
        console.log(`Dear ${guests[i]}, you are invited to dinner`);
    }
    console.log(`Mr. ${guests[1]}  is on a date, so he isn't able to make it to the dinner`);
    guests[1] = "Faiz ul Azam";
    for (let i = 0; i < guests.length; i++) {
        console.log(`Dear ${guests[i]}, you are invited to dinner`);
    }
    console.log(`Hey Guys! I found a bigger table Yeeeeehaaaa, let's add few champs to the list \n\n Newbie added at the start`);
    guests.unshift("Newbie1");
    for (let i = 0; i < guests.length; i++) {
        console.log(`Dear ${guests[i]}, you are invited to dinner${guests}`);
    }
    // Can't find append() as funtion for array object in TypeScript
    let mIndex = Math.round(guests.length / 2);
    let arr1 = guests.slice(0, mIndex);
    let arr2 = guests.slice(mIndex, guests.length);
    arr1.push("Newbie2");
    guests = arr1.concat(arr2);
    console.log(`\n\n new bnda has been incldeud in the middle`);
    for (let i = 0; i < guests.length; i++) {
        console.log(`Dear ${guests[i]}, you are invited to dinner`);
    }
    console.log(`\n\n new bnda has been incldeud at the end`);
    guests.push("newBie3");
    for (let i = 0; i < guests.length; i++) {
        console.log(`Dear ${guests[i]}, you are invited to dinner`);
    }
    // exercise 17 starts here
    console.log(`My dinner table has not yet arrived, so I may accomodate only two champs`);
    // dropping out the guests from list to shrink it
    let len = guests.length;
    let dropOut;
    for (let i = 0; i < len; i++) {
        dropOut = guests.pop();
        console.log(`Hey ${dropOut}! I am sorry, I am unable to entertain you for the dinner`);
        if (guests.length == 2)
            break;
    }
    // printing invitations for the rest of the persons
    for (let i = 0; i < guests.length; i++) {
        console.log(`Dear ${guests[i]}, you are still invited to dinner.`);
    }
    // removing the remaining invitees.
    len = guests.length;
    for (let i = 0; i < len; i++) {
        guests.pop();
    }
    // printing the empty list for verification
    console.log(`here is the final list:\n ${guests}`);
}
