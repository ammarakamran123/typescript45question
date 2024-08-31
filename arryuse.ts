
let namedesh:string[]=["ammara","awais","nasira", "ghafoor"];

//add new gest 
let unavailableguest="awais";
let newguest="bisma";

//removeunavailable guest
let index=namedesh.indexOf(unavailableguest);
if(index!== -1){
    namedesh[index]=newguest;
}
//loop through the update list
namedesh.forEach(gest=>{
    console.log(`bear ${gest} ,wellcome to dinner`)
});


