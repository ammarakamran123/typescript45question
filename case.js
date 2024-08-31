"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let username = "ammara ghafoor";
let upercase = username.toUpperCase();
console.log(upercase);
let lowercase = username.toLowerCase();
console.log(lowercase);
const subName = username.split(" ");
//console.log(subName)
const modifyarry = subName.map((value) => {
    const temp = value[0].toUpperCase();
    //console.log(temp);
    return temp + value.slice(1);
});
console.log(modifyarry.join(""));
