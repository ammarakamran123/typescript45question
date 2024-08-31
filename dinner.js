"use strict";
let dinner = ["ammara", "awais", "nasira", "ghafoor"];
//print massage 
console.log("sorry we just invite only two persons");
//remove guest 
while (dinner.length > 2) {
    let removeguest = dinner.pop();
    console.log(`sorry ${removeguest}, you are not invited`);
}
dinner.forEach(guest => {
    console.log(`you ${guest}, are invited`);
});
console.log(`number of person are invited ${dinner.length}`);
