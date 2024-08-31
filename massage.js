"use strict";
let massages = ["admin", "loc", "acick"];
if (massages.length == 0) {
    console.log("you need the user");
}
else {
    for (let massage of massages) {
        if (massage == `admin`) {
            console.log(`Hello ${massage}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${massage}, thank you for logging in again.`);
        }
    }
}
massages = [];
if (massages.length === 0) {
    console.log("you need the user");
}
