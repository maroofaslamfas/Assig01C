"use strict";
function city_country(name, country = "Pakistan") {
    return name + ", " + country;
}
console.log(city_country("Fort Abbas"));
console.log(city_country("Lahore"));
console.log(city_country("Ferozpore", "India"));
