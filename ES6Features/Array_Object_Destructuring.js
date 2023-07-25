let food = ['Pizza','Burger','Pasta','Coffee','Tea']


// let p = food[0]
// let b = food[1]
// let c = food [2]

// Destructure array

let [,,p] = food

console.log(p)


//Destructure object

let person ={
    name : 'Peter',
    age : 52,
    salary :'100$'
}

// let { name,age,salary} = person

// console.log(name,age,salary)

// IN React

// props:{
//     username,
//     age,
// }

//props.username , props.age, props.dob


// let {username,age,dob} = props

// username , age , dob : display