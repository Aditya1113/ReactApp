// 1) Named Function : a Function with a name 
// Function myname()

// 2)Anonymous Function or  a function expression : A function without name


// Arrow Function is a concise syntax for writing function expression

let sum = function(a,b){
    return a+b
}

console.log(sum(4,3))


// Arrow Function
let sum1 = (a,b)=> a+b

console.log(sum1(5,3))

//single parameter,single statement

let greet = name=>console.log(`Hi ${name}`)

greet('Peter')

//single parameter,multiple statements

let test = age =>{
    if(age>18){
        console.log('can vote')
    }
    else{
        console.log('cannot vote')
    }
}

test(15)



