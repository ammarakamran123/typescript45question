function sandwich(...item:string[]):void{
    console.log("making your sandwich");
    
       for( let items of item){
        console.log(`${items}`)
       }
     console.log("you sandwich is here")
}  
sandwich("chees","tomato");
