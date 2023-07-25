// ES6 promises

//Promise : It is an obejct which returns a future value but not necessarily right now

// Promises has three states

//1. Pending State

// 2. Fulfill State

//3. Reject State

// Promises are used for communication with APIs

//Promises are well suited for handling asynchronous operations
//like fetching data from server or reading files asynchronously without blocking the main thread of execution

isCompleted = true

let learnJs = new Promise((resolve,reject)=>{

    //Pending State(add Delay)
    setTimeout(() => {
        if(isCompleted){  //API call
            resolve("JavaScript learning completed successfully")   //Fulfilled state
    
        }
        else{
            reject('Error in completing JavaScript Learning')     //Rejected state
        }
    }, 3000);
    
})

//console.log(learnJs)

//lets handle the promise (consume the promise)

learnJs
.then((res)=>console.log(res))
.catch((err)=>{
    console.log(err)
});