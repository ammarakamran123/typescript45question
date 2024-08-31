let username:string="ammara ghafoor";
let upercase:string=username.toUpperCase();
console.log(upercase);
let lowercase:string=username.toLowerCase();
console.log(lowercase);
const subName:Array<string>=username .split(" ")
 //console.log(subName)
 const modifyarry=subName.map((value)=>{
  const temp=value[0].toUpperCase();
  //console.log(temp);
  return temp + value.slice(1)
 })

console.log(modifyarry.join(""))
export{}


