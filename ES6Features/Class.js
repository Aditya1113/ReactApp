// object constructor , object prototype

// ES6 : class, object

class Rectangle{

        constructor(l,w){
            this.length = l
            this.width = w
        }

        getArea(){
            return this.length * this.width
        }

        getPerimeter(){
            return 2*(this.length + this.width)
        }

}

let r1 = new Rectangle (10,20)
let r2 = new Rectangle (30,40)

// this.length = l  this.width = w
// r1.length = 10   r1.width = 20

// r2.length = 30      r2.width = 40  
                  
console.log(r1.getArea())