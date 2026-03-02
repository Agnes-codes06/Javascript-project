// anonnymous functions with parameters

// addition

const add = function(num1, num2){

    let addition = num1 + num2

    console.log(`the addition is ${addition}`)
}
add(25, 10)


// subtraction
const subtract = function(num1, num2){

    let subtraction = num1 - num2

    console.log(`the subtraction is ${subtraction}`)
}
subtract(60, 45)


// division
const divide = function(num1, num2){

    let division = num1 / num2

    console.log(`the division is ${division}`)
}
divide(100, 5)


// modulus
const modulus = function(num1, num2){

    let remainder = num1 % num2

    console.log(`the remainder is ${remainder}`)
}
modulus(10, 3)


// simple interest
const simpleInterest = function(principal, rate, time){

    let interest = (principal * rate * time) / 100

    console.log(`the simple interest is ${interest}`)
}
simpleInterest(1000, 5, 2)


// bmi
const BMI = function(weight, height){

    let bmi = weight / (height * height)

    console.log(`the BMI is ${bmi}`)
}
BMI(70, 1.75)


// area of square
const areaOfSquare = function(side){

    let areaofsquare = side * side

    console.log(`the area of square is ${areaofsquare}`)
}
areaOfSquare(60)


// area of triangle
const areaOfTriangle = function(base, height){

    let areaoftriangle = (base * height) / 2

    console.log(`the area of triangle is ${areaoftriangle}`)
}
areaOfTriangle(100, 21)


// area of circle
const areaOfCircle = function(radius){

    let areaofcircle = 22/7 * radius * radius

    console.log(`the area of circle is ${areaofcircle}`)
}
areaOfCircle(21)


// perimeter of circle
const perimeterOfCircle = function(radius){

    let perimeter = 2 * 22/7* radius

    console.log(`the perimeter of circle is ${perimeter}`)
}
perimeterOfCircle(14)