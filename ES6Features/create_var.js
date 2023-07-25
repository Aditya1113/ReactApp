//ES5
// var : functional scope

//ES6

// let, const  : block scope

function showMyName(){
    if(true){
        let message = "WELCOME"
        console.log(message)
    }
    console.log(message)  // works with var and not let because of block scope in let
}

// showMyName()

// let vs const

function showMyName1(){
    if(true){
        const message = "WELCOME"
        console.log(message)

        message = "Greetings"  // re-initialisation
        console.log(message)
    }

}

showMyName1()

