"use strict";
let current_users = ["maroof", "abubakar", "admin", "ali", "raza", "khan",];
let new_users = ["aslam", "abubakar", "zain", "shah", "rana", "KHAN",];
for (let i = 0; i < new_users.length; i++) {
    if (isUserExist(new_users[i])) {
        console.log(`${new_users[i]}: the person will need to enter a new username`);
    }
    else {
        console.log(`${new_users[i]}: the username is available`);
    }
}
function isUserExist(user) {
    for (let i = 0; i < current_users.length; i++) {
        if (current_users[i].toLocaleLowerCase() == user.toLocaleLowerCase()) {
            return true;
        }
    }
    return false;
}
