"use strict";
let places = ["usa", "uk", "India", "Turkiye", "Arab"];
// printing array in its original order
console.log(`my favourite locations unoredered: ${places}`);
// • Printing the array in alphabetical order without modifying the actual list.
console.log(`my favourite locations ordered without modifying the the original array: ${[...places].sort()}`);
// • Showing that the array is still in its original order by printing it.
console.log(`my favourite locations unoredered(original array): ${places}`);
// • Printing the array in reverse alphabetical order without changing the order of the original list.
console.log(`my favourite locations reverese ordered without modifying the the original array: ${[...places].reverse()}`);
// • Showing that the array is still in its original order by printing it again.
console.log(`my favourite locations unoredered(original array): ${places}`);
// reversing the order of the array
places.reverse();
// array is reversed
console.log(`my favourite locations, array is reversed now: ${places}`);
// reversing the order of the array, again
places.reverse();
// printing array to show array is back to it's orgonal oreder
console.log(`my favourite locations, array is back to it's orgonal oreder now: ${places}`);
// sort the and updating the original array
places.sort();
// showing that thr order of the array has been changed
console.log(`my favourite locations, array is in order now: ${places}`);
// sorting the array in reverse alphabatical order
places.reverse();
// showing the list is updated in reverse alphabatical order
console.log(`my favourite locations, array is in reverse alphabatical order now: ${places}`);
