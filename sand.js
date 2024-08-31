"use strict";
function sandwich(...item) {
    console.log("making your sandwich");
    for (let items of item) {
        console.log(`${items}`);
    }
    console.log("you sandwich is here");
}
sandwich("chees", "tomato");
