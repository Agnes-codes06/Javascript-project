// anonymous functions(this are functions without  a name)(we create a variable that holds an anonymous function eg.const greet and then we call the variable name to run the function)

const greet = function(){

    console.log('hello world')
    console.log("welcome to the world of impossibilities")
    console.log("welcome to modcom institute of technology")


}

greet()

console.log(".................")

const about = function(){

    console.log("modcom has helped me learn programming skills that are in demand in the job market")

    console.log("modcom has helped me build confidence in my abilities to learn and grow in the tech field")

    console.log("modcom has enabled me grow socially  by meeting and interacting with students from every part of the country")

}
about();

console.log("..................")


// immediately invoked function expression (IIFE)/self executing (this are functions that run immediately when they are called)


(function(){
    console.log("welcome to the world of great innovations");
})()