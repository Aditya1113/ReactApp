// Rest Parameter : pack the value into an array

//Spread operator : Unpack the value


//Rest Parameter

function totalSum(...number){
        console.log("Hello")  
        //number = [10,20,30,40]   
}


totalSum(10,20,30,40)

//spread Operator

function totalSum1(a,b,c,d){
    console.log(a,b,c,d)
}

let numberValue = [10,20,30,40]

totalSum1(...numberValue)