"use strict";
// a Shallow block to avoid the conflict of variable names with that of other files of the package
{
    function make_shirt(size = "large", text = "I Love TypeScript") {
        console.log(`Your shirt displays "${text}" and is of ${size} size.`);
    }
    make_shirt();
    make_shirt("medium");
    make_shirt("small", "BRAVO");
    make_shirt("XXXL", "Yeeehhaaa");
}
