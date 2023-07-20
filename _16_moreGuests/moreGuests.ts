{
    // code from exercise 15 and the exercise 16 starts from line 19
  let guests = ["Ali", "AbuBakar", "Khan", "Alvi"];

  for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, you are invited to dinner`);
  }

  console.log(
    `Mr. ${guests[1]}  is on a date, so he isn't able to make it to the dinner`
  );

  guests[1] = "Faiz ul Azam";

  for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, you are invited to dinner`);
  }

  // starting exercise 16

  console.log(
    `Hey Guys! I found a bigger table Yeeeeehaaaa, let's add few champs to the list \n\n Newbie added at the start`
  );

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

}
