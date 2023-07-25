//ES5 
// var : functional scope

//ES6
// let,const : block scope

function showMyName(){
    if(true){
        var message = "WELCOME"
        console.log(message)
    }
    console.log(message)
}


showMyName()