"use strict";
// not in alphabetical order
let arry = ["[karachi]", "[lahore]", "[islamabad]", "[murry]", "[multan]"];
console.log(`orignal order== ${arry}`);
// alphabetical order
const alphabetical = [...arry].sort();
console.log(`Alphabetical order== ${alphabetical}`);
// arry is in original order
console.log(`in oriognal order== ${arry}`);
// in reverce order
const reverce = [...arry].sort().reverse();
console.log(`Alphabetical order== ${reverce}`);
//reverce arry
arry.reverse();
console.log(`reverce arry is== ${arry}`);
