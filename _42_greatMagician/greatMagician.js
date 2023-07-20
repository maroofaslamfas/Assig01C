"use strict";
// Shallow block to avoid any vairable names clash with that of other files of the package
{
    let magicians = ["maroof", "zain", "aslam", "ali", "raza", "khan"];
    function show_magicians(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(`Magician ${i + 1}: ${arr[i]}`);
        }
    }
    function make_great(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = "The Great " + arr[i];
        }
    }
    make_great(magicians);
    show_magicians(magicians);
}
