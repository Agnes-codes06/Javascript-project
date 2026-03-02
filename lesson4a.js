// functions with parameters

function greet(name){

    // console.log("hello", name)
    console.log(`Hello ${name}`)

}

greet("Joe")
greet("Agnes")

console.log("..................")

function favouritecounty(county){
    // console.log("My favourite county is", county)
    console.log(`my favourite county is ${county}`)
}
favouritecounty("Nairobi")
favouritecounty("Mombasa")
favouritecounty("Kisumu")


console.log("..................")

// function to add
function add(num1, num2){

    let addition = num1 + num2

    console.log(`the addition is ${addition}`)
}
add(5, 10)


// function to subtract
function subtract(num1, num2){

    let subtraction = num1 - num2

    console.log(`the subtraction is ${subtraction}`)
}
subtract(10, 5)


// function for modulus
function modulus(num1, num2){

    let remainder = num1 % num2

    console.log(`the remainder is ${remainder}`)
}
modulus(10, 3)


// function for division
function divide(num1, num2){

    let division = num1 / num2

    console.log(`the division is ${division}`)
}
divide(10, 2)

// function for simple interest
function simpleInterest(principal, rate, time){

    let interest = principal * rate * time / 100

    console.log(`the simple interest is ${interest}`)
}
simpleInterest(1000, 5, 2)

// function for BMI
function BMI(weight, height) {

    let bmi = weight / (height * height)

    console.log(`The BMI is ${bmi}`)
}
BMI(70, 1.75)