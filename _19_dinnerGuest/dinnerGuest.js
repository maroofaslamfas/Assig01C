"use strict";
// starting with exercise number 14
//delraing a local shallow block to avoid the clash of variable names
{
    let guests = ["Ali", "AbuBakar", "Khan", "Alvi"];
    for (let i = 0; i < guests.length; i++) {
        console.log(`Dear ${guests[i]}, you are invited to dinner`);
    }
    console.log(`I have invited total of ${guests.length} guests for the dinner today`);
}
