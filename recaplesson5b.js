// create an arrow function that accepts a number n and prints all even number from 1 to n

const number=(n)=>{

    for(let number=1; number<=20; number++)

    if(number %2==0){
        console.log("this an even number",number);
    }

}
number(1)

console.log("...............")
// create an arrow function that prints all the odd numbers from 1 to n using a while loop

const number1=(n)=>{

    while (n<=100){
        console.log("this is odd number",n);
        n+=2
    }
}
number1(1)

console.log("...............")
// create an arrow function to print numbers from n down to 1
const number2=(n)=>{

    for(let n=10; n>=1; n--){
        console.log(n)
    }
}

number2(10)

console.log("...............")

// write an arrow function square that a number as a parameter and logs its square

const square=(n)=>{
    let square=n*n
    console.log(`the square is ${square}`)
}
square(8)

console.log("...............")

// print numbers from 1 to n and print (fizzbuzz,buzz,fizz)

 const fizzbuzz=(n)=>{
    if(n%3==0 && n%5==0){
        console.log("fizzbuzz")
    }

    else if(n%5==0){
        console.log("buzz")
    }
    else if(n%3==0){
        console.log("fizz")

    }

    else{
        console.log("n")
    }

}
fizzbuzz(45)
fizzbuzz(10)
fizzbuzz(9)


