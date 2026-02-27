// functions
// a function is a named block of code that perform a specific task and only runs when called


function greet(){
    console.log("Hello world")
    console.log("Good Afternoon")
    console.log("good morning")
}
greet();

console.log("...................")

// a function to add 2 numbers without parameters

function add(){

    let num1=10
    let num2=30
    let sum = num1 + num2
    // console.log("the sum is",sum)
    console.log(`the sum is ${sum}`);

}

add()

// subtraction  
function subtract(){
    let num1=50
    let num2=20
    let subtraction = num1 - num2
    console.log(`the difference is ${subtraction}`);
}
subtract()

// multiplication
function multiply(){
    let num1=10
    let num2=5
    let multiply = num1 * num2
    console.log(`the multiplication is ${multiply}`);
}
multiply()



// modulus
function modulus(){
    let num1=10
    let num2=3
    let remainder = num1 % num2
    console.log(`the modulus is ${remainder}`);
}
modulus()


// division
function divide(){
    let num1=20
    let num2=4
    let division= num1 / num2
    console.log(`the division is ${division}`);
}
divide()


// exponent
function exponent(){
    let num1=2
    let num2=3
    let exponent = num1**num2
    console.log(`the exponent is ${exponent}`);
}
exponent()