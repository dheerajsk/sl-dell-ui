// 1. JavaScript can perform asynchronous tasks.

// Task 1: To update database.
// Task 2: Print confirmation after db update.

function updateDatabase(cb){
    // update database;
    console.log("Updating Database");
    setTimeout(()=>{console.log("DB Updated"); cb()}, 2000);
}

const printConfirmation =  function(){
    console.log("Printing confirmation after db update");
}

updateDatabase(printConfirmation);