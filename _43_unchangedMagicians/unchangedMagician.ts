// Shallow block to avoid any vairable names clash with that of other files of the package
{
  let magicians = ["maroof", "zain", "aslam", "ali", "raza", "khan"];

  function show_magicians(arr: string[]) {
    for (let i = 0; i < arr.length; i++) {
      console.log(`Magician ${i + 1}: ${arr[i]}`);
    }
  }
  function make_great(arr: string[]) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = "The Great " + arr[i];
    }
    return arr;
  }

  // cloning an array
  let great_Magicians = [...magicians];
  make_great(great_Magicians);

  // printing orginal array
  console.log(`Orignal Array`);
  show_magicians(magicians);

  // printing changed array
  console.log(`Modified Array`);
  show_magicians(great_Magicians);
}
