/* creating local shallow block to avoid variable names clash 
with that of other files of project */

{
  // version for running the green block

  let alien_color = "green";

  if (alien_color == "green") {
    console.log(`player just eraned 5 points for shootoing the alien`);
  } else if (alien_color == "yellow") {
    console.log(`player just eraned 10 points for shootoing the alien`);
  } else if (alien_color == "red") {
    console.log(`player just eraned 15 points for shootoing the alien`);
  }

  // version for running the yellow block

  alien_color = "yellow";

  if (alien_color == "green") {
    console.log(`player just eraned 5 points for shootoing the alien`);
  } else if (alien_color == "yellow") {
    console.log(`player just eraned 10 points for shootoing the alien`);
  } else if (alien_color == "red") {
    console.log(`player just eraned 15 points for shootoing the alien`);
  }

  // version for running the red block
  alien_color = "red";

  if (alien_color == "green") {
    console.log(`player just eraned 5 points for shootoing the alien`);
  } else if (alien_color == "yellow") {
    console.log(`player just eraned 10 points for shootoing the alien`);
  } else if (alien_color == "red") {
    console.log(`player just eraned 15 points for shootoing the alien`);
  }
}
