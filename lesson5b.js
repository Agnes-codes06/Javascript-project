// arrow function with parameters

const greet = (name) => {

    console.log(`hello ${name}`);
}

greet("Joe")
greet("Agnes")

console.log("......................")

const favouritecounty = (county) => {

    console.log(`my favourite county is ${county}`)
}

favouritecounty("Nairobi")
favouritecounty("Mombasa")
favouritecounty("Nakuru")

console.log("......................")

// addition
const add=(num1,num2)=>{

    let addition=num1 + num2
    console.log(`The sum is ${addition}`);
    
}
add(60,20)

// subtraction
const subtract=(num1,num2)=>{

    let subtraction=num1-num2
    console.log(`The difference is ${subtraction}`);
}
subtract(180,50)

// division
const divide=(num1,num2)=>{

    let division=num1/num2
   console.log(`The division is ${division}`);
}
divide(100,20)

// modulus
const modulus=(num1,num2)=>{

    let remainder=num1%num2
    console.log(`The modulus is ${remainder}`);
}
modulus(10,3)

// simpleinterest
const simpleinterest=(principle,rate,time)=>{

    let interest=principle*rate*time/100
    console.log(`The simpleinterest is ${interest}`)
}
simpleinterest(1000,5,2)

// BMI
const BMI=(weight,height)=>{
    
    let bmi=weight/(height*height)
    console.log(`The body mass index is ${bmi}`);
}
BMI(70,1.75)

// area of triangle
const trianglearea=(base,height)=>{

    let area=1/2*base*height
    console.log(`The area of the triangle is ${area}`);
}
trianglearea(50,10)







