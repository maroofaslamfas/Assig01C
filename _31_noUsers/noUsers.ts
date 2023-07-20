let users = ["maroof", "abubakar", "admin", "ali", "raza", "khan"];
let len = users.length;
for (let i = 0; i < len; i++) {
  users.pop();
}

if (users.length <= 0) {
    console.log(`We need to find some user first`);
} else {
  for (let i = 0; i < users.length; i++) {
    if (users[i] == "admin") {
      console.log(`Hello admin, would you like to see a status report?`);
    } else {
      console.log(`Hello ${users[i]}! Thank you for logging in again`);
    }
  }
}
