let user:string[]=["ammara","Awais","nasira","waqas"]
// new users
let newuser:string[]=["awais","ghafoor","nasira","bisma"]
// convert user in lowercase
let lowercaseuser:string[]=user.map(use=> use.toLowerCase())

//loop runing
for(let newuse of newuser){
    let lowercasenewuser=newuse.toLowerCase()
    

if(lowercaseuser.includes(lowercasenewuser)){
    console.log(`user=${newuse} already inculd`)

}
else{
    console.log(`${newuse} =wellcome`)
}
}