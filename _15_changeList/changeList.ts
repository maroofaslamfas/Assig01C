//using the following block to avoid the clash of variable names with that of other files in the project

{

// code from exercise 14, and the exercise 16 starts from line 13

  let guests = ["Ali", "AbuBakar", "Khan", "Alvi"];

  for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, you are invited to dinner`);
  }

  // starting exercise 15

console.log(`Mr. ${guests[1]}  is on a date, so he isn't able to make it to the dinner`);

guests[1] = "Faiz ul Azam";

for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, you are invited to dinner`);
  }
}
